import { MarkdownPostProcessor, setIcon } from 'obsidian';

import { CalloutConfig } from './settings';

function getFirstTextNode(li: HTMLElement) {
  for (const node of Array.from(li.childNodes)) {
    if (node.nodeType === document.ELEMENT_NODE && (node as HTMLElement).classList.contains('tasks-list-text')) {
      const descriptionNode = (node as HTMLElement).firstElementChild
      if (descriptionNode?.classList.contains('task-description')) {
        const textNode = descriptionNode.firstElementChild?.firstChild;
        if (textNode.nodeType === document.TEXT_NODE) {
          return textNode;
        }
      }
    }

    if (
      node.nodeType === document.ELEMENT_NODE &&
      (node as HTMLElement).tagName === 'P'
    ) {
      return node.firstChild;
    }

    if (node.nodeType !== document.TEXT_NODE) {
      continue;
    }

    if ((node as Text).nodeValue.trim() === '') {
      continue;
    }

    return node;
  }

  return null;
}

function wrapLiContent(li: HTMLElement) {
  const toReplace: ChildNode[] = [];
  let insertBefore = null;

  for (let i = 0, len = li.childNodes.length; i < len; i++) {
    const child = li.childNodes.item(i);

    if (child.nodeType === document.ELEMENT_NODE) {
      const el = child as Element;
      if (
        el.hasClass('list-collapse-indicator') ||
        el.hasClass('list-bullet')
      ) {
        continue;
      }

      if (['UL', 'OL'].includes(el.tagName)) {
        insertBefore = child;
        break;
      }
    }

    toReplace.push(child);
  }

  const wrapper = createSpan({ cls: 'lc-li-wrapper' });

  toReplace.forEach((node) => wrapper.append(node));

  if (insertBefore) {
    insertBefore.before(wrapper);
  } else {
    li.append(wrapper);
  }
}

export function buildPostProcessor(
  getConfig: () => CalloutConfig
): MarkdownPostProcessor {
  return async (el, ctx: any) => {
    const config = getConfig();

    if (ctx.promises?.length) {
      await Promise.all(ctx.promises);
    }

    el.findAll('li').forEach((li) => {
      const node = getFirstTextNode(li);
      if (!node) return;

      const text = node.textContent;
      if (!text) return;

      const match = text.match(config.re);
      const callout = match ? config.callouts[match[1]] : null;

      if (callout) {
        li.addClass('lc-list-callout');
        li.setAttribute('data-callout', callout.char);
        li.style.setProperty('--lc-callout-color', callout.color);

        node.replaceWith(
          createFragment((f) => {
            f.append(
              createSpan(
                {
                  cls: 'lc-list-marker',
                  text: text.slice(0, callout.char.length),
                },
                (span) => {
                  if (callout.icon) {
                    setIcon(span, callout.icon);
                  }
                }
              )
            );
            f.append(text.slice(callout.char.length));
          })
        );

        wrapLiContent(li);
      }
    });
  };
}
