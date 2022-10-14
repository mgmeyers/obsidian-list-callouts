import { MarkdownPostProcessor, setIcon } from "obsidian";
import { CalloutConfig } from "./settings";

function getFirstTextNode(li: HTMLElement) {
  for (const node of li.childNodes) {
    if (
      node.nodeType === document.ELEMENT_NODE &&
      (node as HTMLElement).tagName === "P"
    ) {
      return node.firstChild;
    }

    if (node.nodeType !== document.TEXT_NODE) {
      continue;
    }

    if ((node as Text).nodeValue.trim() === "") {
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
      if ((child as Element).hasClass("list-collapse-indicator")) {
        continue;
      }

      if (["UL", "OL"].includes((child as Element).tagName)) {
        insertBefore = child;
        break;
      }
    }

    toReplace.push(child);
  }

  const wrapper = createSpan({ cls: "lc-li-wrapper" });

  toReplace.forEach((node) => wrapper.append(node));

  if (insertBefore) {
    insertBefore.before(wrapper);
  } else {
    li.append(wrapper);
  }
}

export function buildPostProcessor(
  getConfig: () => CalloutConfig[]
): MarkdownPostProcessor {
  return (el) => {
    const config = getConfig();

    el.findAll("li").forEach((li) => {
      const node = getFirstTextNode(li);

      if (!node) return;

      const text = node.textContent;

      if (!text) return;

      for (const callout of config) {
        const match = text.match(callout.re);

        if (match) {
          li.addClass("lc-list-callout");
          li.style.setProperty("--lc-callout-color", callout.color);

          node.replaceWith(
            createFragment((f) => {
              f.append(
                createSpan(
                  {
                    cls: "lc-list-marker",
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

          break;
        }
      }
    });
  };
}
