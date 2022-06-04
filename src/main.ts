import { EditorView } from "@codemirror/view";
import { debounce, Events, MarkdownView, Plugin } from "obsidian";
import escapeStringRegexp from "escape-string-regexp";
import {
  CalloutConfig,
  colorOrder,
  ListCalloutSettings,
  ListCalloutsSettings,
} from "./settings";
import { calloutExtension, calloutsConfigField, setConfig } from "./extension";
import { buildPostProcessor } from "./postProcessor";

const DEFAULT_SETTINGS: ListCalloutsSettings = {
  "255, 214, 0": {
    char: "&",
  },
  "255, 145, 0": {
    char: "?",
  },
  "255, 23, 68": {
    char: "!",
  },
  "124, 77, 255": {
    char: "~",
  },
  "0, 184, 212": {
    char: "@",
  },
  "0, 200, 83": {
    char: "$",
  },
  "158, 158, 158": {
    char: "%",
  },
};

export default class ListCalloutsPlugin extends Plugin {
  settings: ListCalloutsSettings;
  emitter: Events;
  postProcessorConfig: CalloutConfig[];

  async onload() {
    await this.loadSettings();
    this.buildPostProcessorConfig();
    this.addSettingTab(new ListCalloutSettings(this));

    this.emitter = new Events();

    this.registerMarkdownPostProcessor(
      buildPostProcessor(() => this.postProcessorConfig)
    );

    this.registerEditorExtension([
      calloutsConfigField.init(() => {
        return this.buildEditorConfig();
      }),
      calloutExtension,
    ]);

    app.workspace.trigger("parse-style-settings");
  }

  emitSettingsUpdate = debounce(() => this.dispatchUpdate(), 2000, true);

  dispatchUpdate() {
    const newConfig = this.buildEditorConfig();

    app.workspace.getLeavesOfType("markdown").find((l) => {
      const view = l.view as MarkdownView;
      const cm = (view.editor as any).cm as EditorView;

      cm?.dispatch({
        effects: [setConfig.of(newConfig)],
      });
    });
  }

  buildEditorConfig(): CalloutConfig[] {
    return colorOrder.map((c) => {
      return {
        color: c,
        char: this.settings[c].char,
        icon: this.settings[c].icon,
        re: new RegExp(
          `(^\\s*[-*+] |^\\s*\\d+[\\.\\)] )${escapeStringRegexp(
            this.settings[c].char
          )} `
        ),
      };
    });
  }

  buildPostProcessorConfig() {
    this.postProcessorConfig = colorOrder.map((c) => {
      return {
        color: c,
        char: this.settings[c].char,
        icon: this.settings[c].icon,
        re: new RegExp(`^${escapeStringRegexp(this.settings[c].char)} `),
      };
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
    this.emitSettingsUpdate();
    this.buildPostProcessorConfig();
  }
}
