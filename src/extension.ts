import { ensureSyntaxTree, tokenClassNodeProp } from '@codemirror/language';
import {
  EditorState,
  RangeSetBuilder,
  StateEffect,
  StateField,
} from '@codemirror/state';
import {
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from '@codemirror/view';
import { setIcon } from 'obsidian';

import { CalloutConfig } from './settings';

export const setConfig = StateEffect.define<CalloutConfig[]>();

export class CalloutBackground extends WidgetType {
  toDOM() {
    return createSpan({
      cls: 'lc-list-bg',
      attr: {
        'aria-hidden': 'true',
      },
    });
  }
}

export class CalloutMarker extends WidgetType {
  char: string;
  icon?: string;

  constructor(char: string, icon?: string) {
    super();

    this.char = char;
    this.icon = icon;
  }

  toDOM() {
    return createSpan(
      {
        text: this.char,
        cls: 'lc-list-marker',
        attr: {
          'aria-hidden': 'true',
        },
      },
      (s) => {
        if (this.icon) {
          setIcon(s, this.icon);
        }
      }
    );
  }
}

export const calloutDecoration = (color: string) =>
  Decoration.line({
    attributes: {
      class: 'lc-list-callout',
      style: `--lc-callout-color: ${color}`,
    },
  });

export const calloutsConfigField = StateField.define<CalloutConfig[]>({
  create() {
    return [];
  },
  update(state, tr) {
    for (const e of tr.effects) {
      if (e.is(setConfig)) {
        state = e.value;
      }
    }

    return state;
  },
});

export function buildCalloutDecos(view: EditorView, state: EditorState) {
  const config = state.field(calloutsConfigField);

  if (!config.length || !view.visibleRanges.length) return Decoration.none;

  const builder = new RangeSetBuilder<Decoration>();
  const seen: Set<number> = new Set();

  const lastRange = view.visibleRanges[view.visibleRanges.length - 1];
  const tree = ensureSyntaxTree(state, lastRange.to, 50);
  const { doc } = state;

  for (const { from, to } of view.visibleRanges) {
    tree.iterate({
      from,
      to,
      enter({ type, from, to }): false | void {
        const prop = type.prop(tokenClassNodeProp);
        if (prop && /formatting-list/.test(prop)) {
          const { from: lineFrom, text, number } = doc.lineAt(from);

          if (seen.has(number)) return;

          for (const callout of config) {
            const match = text.match(callout.re);
            if (match) {
              seen.add(number);

              const labelPos = lineFrom + match[1].length;

              // Set the line class and callout color
              builder.add(lineFrom, lineFrom, calloutDecoration(callout.color));

              // Add the callout background element
              builder.add(
                lineFrom,
                lineFrom,
                Decoration.widget({ widget: new CalloutBackground(), side: -1 })
              );

              // Decorate the callout marker
              builder.add(
                labelPos,
                labelPos + callout.char.length,
                Decoration.replace({
                  widget: new CalloutMarker(callout.char, callout.icon),
                })
              );

              break;
            }
          }
        }
      },
    });
  }

  return builder.finish();
}

export const calloutExtension = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = buildCalloutDecos(view, view.state);
    }

    update(update: ViewUpdate) {
      if (
        update.docChanged ||
        update.viewportChanged ||
        update.transactions.some((tr) =>
          tr.effects.some((e) => e.is(setConfig))
        )
      ) {
        this.decorations = buildCalloutDecos(update.view, update.state);
      }
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);
