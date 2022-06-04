import {
  ButtonComponent,
  Menu,
  PluginSettingTab,
  setIcon,
  Setting,
  TextComponent,
} from "obsidian";
import ListCalloutsPlugin from "./main";

export const iconOptions = [
  "lucide-alert-triangle",
  "lucide-bookmark-plus",
  "lucide-bookmark",
  "lucide-bug",
  "lucide-calendar",
  "lucide-check-circle-2",
  "lucide-check",
  "lucide-clipboard-list",
  "lucide-clock",
  "lucide-flag",
  "lucide-flame",
  "lucide-heart",
  "lucide-help-circle",
  "lucide-highlighter",
  "lucide-info",
  "lucide-key",
  "lucide-list",
  "lucide-map-pin",
  "lucide-megaphone",
  "lucide-message-circle",
  "lucide-pencil",
  "lucide-slash",
  "lucide-star",
  "lucide-thumbs-down",
  "lucide-thumbs-up",
  "lucide-trash2",
  "lucide-x",
  "lucide-zap",
  "quote-glyph",
];

export const colorOrder = [
  "255, 214, 0",
  "255, 145, 0",
  "255, 23, 68",
  "124, 77, 255",
  "0, 184, 212",
  "0, 200, 83",
  "158, 158, 158",
];

export interface Callout {
  char: string;
  icon?: string;
}

export interface CalloutConfig extends Callout {
  color: string;
  re: RegExp;
}

export type ListCalloutsSettings = Record<string, Callout>;

// Build a static CM6 list line with callout markup applied
export function buildSettingCallout(
  root: HTMLElement,
  color: string,
  callout: Callout
) {
  root.empty();
  root.createDiv(
    {
      cls: "markdown-source-view cm-s-obsidian mod-cm6 is-readable-line-width is-live-preview",
    },
    (mockSrcView) => {
      mockSrcView.createDiv(
        {
          cls: "HyperMD-list-line HyperMD-list-line-1 lc-list-callout cm-line",
          attr: {
            style: `text-indent: -8px; padding-left: 12px; --lc-callout-color: ${color}`,
          },
        },
        (mockListLine) => {
          mockListLine.createSpan(
            {
              cls: "cm-formatting cm-formatting-list cm-formatting-list-ul cm-list-1",
            },
            (span) => {
              span.createSpan({ cls: "list-bullet", text: "-" });
              span.appendText(" ");
            }
          );
          mockListLine.createSpan({ cls: "lc-list-bg" });
          mockListLine.createSpan({ cls: "lc-list-marker" }, (span) => {
            if (callout.icon) {
              setIcon(span, callout.icon);
            } else {
              span.appendText(callout.char);
            }
          });
          mockListLine.createSpan({
            cls: "cm-list-1",
            text: " Sed eu nisl rhoncus, consectetur mi quis, scelerisque enim.",
          });
        }
      );
    }
  );
}

export function buildSetting(
  containerEl: HTMLElement,
  plugin: ListCalloutsPlugin,
  color: string,
  callout: Callout
) {
  containerEl.createDiv({ cls: "lc-setting" }, (el) => {
    const calloutContainer = el.createDiv({ cls: "lc-callout-container" });

    buildSettingCallout(calloutContainer, color, callout);

    el.createDiv({ cls: "lc-input-container" }, (inputContainer) => {
      // Character input
      new TextComponent(inputContainer)
        .setValue(callout.char)
        .onChange((value) => {
          if (!value) return;

          plugin.settings[color].char = value[0];
          plugin.saveSettings();

          buildSettingCallout(calloutContainer, color, plugin.settings[color]);
        });

      // Icon select menu
      new ButtonComponent(inputContainer).then((btn) => {
        if (callout.icon) {
          btn.setIcon(callout.icon);
        } else {
          btn.setButtonText("Set Icon");
        }

        // Button
        btn.onClick((e) => {
          const menu = new Menu();

          (menu as any).dom?.addClass("lc-menu");

          menu.addItem((item) => {
            item.setTitle("No icon");
            item.onClick(() => {
              delete plugin.settings[color].icon;

              plugin.saveSettings();

              buildSettingCallout(
                calloutContainer,
                color,
                plugin.settings[color]
              );

              btn.buttonEl.empty();
              btn.setButtonText("Set Icon");
            });
          });

          // Menu
          iconOptions.forEach((icon) => {
            menu.addItem((item) => {
              item.setIcon(icon);
              item.onClick(() => {
                plugin.settings[color].icon = icon;

                plugin.saveSettings();

                buildSettingCallout(
                  calloutContainer,
                  color,
                  plugin.settings[color]
                );

                btn.buttonEl.empty();
                btn.setIcon(icon);
              });
            });
          });

          menu.showAtMouseEvent(e);
        });
      });
    });
  });
}

export class ListCalloutSettings extends PluginSettingTab {
  plugin: ListCalloutsPlugin;

  constructor(plugin: ListCalloutsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl).setDesc(
      createFragment((f) => {
        f.appendText(
          "See the Style Settings plugin for additional configuration options."
        );
        f.append(createEl("br"));
        f.append(
          createEl("strong", {
            text: "Note: Using +, *, -, >, or # as the callout character can disrupt reading mode.",
          })
        );
      })
    );

    colorOrder.forEach((color) => {
      buildSetting(
        containerEl,
        this.plugin,
        color,
        this.plugin.settings[color]
      );
    });
  }
}
