import { RangeSetBuilder, StateEffect, StateField } from '@codemirror/state';
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

export function buildCalloutDecos(view: EditorView) {
  const config = view.state.field(calloutsConfigField);

  if (!config.length) return Decoration.none;

  const builder = new RangeSetBuilder<Decoration>();
  const seen: Set<number> = new Set();

  for (const { from, to } of view.visibleRanges) {
    for (let pos = from; pos <= to; ) {
      const line = view.state.doc.lineAt(pos);

      for (const callout of config) {
        const match = line.text.match(callout.re);

        if (match) {
          if (seen.has(line.from)) break;
          seen.add(line.from);

          const labelPos = line.from + match[1].length;

          // Set the line class and callout color
          builder.add(line.from, line.from, calloutDecoration(callout.color));

          // Decorate the callout marker
          builder.add(
            labelPos,
            labelPos + callout.char.length,
            Decoration.replace({
              widget: new CalloutMarker(callout.char, callout.icon),
            })
          );

          // Add the callout background element
          builder.add(
            line.to,
            line.to,
            Decoration.widget({
              widget: new CalloutBackground(),
              side: 1,
            })
          );

          break;
        }
      }

      pos = line.to + 1;
    }
  }

  return builder.finish();
}

export const calloutExtension = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = buildCalloutDecos(view);
    }

    update(update: ViewUpdate) {
      if (
        update.docChanged ||
        update.viewportChanged ||
        update.transactions.some((tr) =>
          tr.effects.some((e) => e.is(setConfig))
        )
      ) {
        this.decorations = buildCalloutDecos(update.view);
      }
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);
