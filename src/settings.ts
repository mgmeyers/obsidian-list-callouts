import {
  ButtonComponent,
  ColorComponent,
  Platform,
  PluginSettingTab,
  Setting,
  TextComponent,
  debounce,
  getIconIds,
  setIcon,
} from 'obsidian';

import { iconList as icons } from './iconList';
import ListCalloutsPlugin from './main';

export interface Callout {
  char: string;
  color: string;
  icon?: string;
  custom?: boolean;
}

export interface CalloutConfig {
  callouts: Record<string, Callout>;
  re: RegExp;
}

export type ListCalloutsSettings = Callout[];

// Build a static CM6 list line with callout markup applied
export function buildSettingCallout(root: HTMLElement, callout: Callout) {
  root.empty();
  root.createDiv(
    {
      cls: 'markdown-source-view cm-s-obsidian mod-cm6 is-readable-line-width is-live-preview',
    },
    (mockSrcView) => {
      mockSrcView.createDiv(
        {
          cls: 'HyperMD-list-line HyperMD-list-line-1 lc-list-callout cm-line',
          attr: {
            style: `text-indent: -8px; padding-left: 12px; --lc-callout-color: ${callout.color}`,
          },
        },
        (mockListLine) => {
          mockListLine.createSpan(
            {
              cls: 'cm-formatting cm-formatting-list cm-formatting-list-ul cm-list-1',
            },
            (span) => {
              span.createSpan({ cls: 'list-bullet', text: '-' });
              span.appendText(' ');
            }
          );
          mockListLine.createSpan({ cls: 'lc-list-bg' });
          mockListLine.createSpan({ cls: 'lc-list-marker' }, (span) => {
            if (callout.icon) {
              setIcon(span, callout.icon);
            } else {
              span.appendText(callout.char);
            }
          });
          mockListLine.createSpan({
            cls: 'cm-list-1',
            text: ' Sed eu nisl rhoncus, consectetur mi quis, scelerisque enim.',
          });
        }
      );
    }
  );
}

function attachIconMenu(
  btn: ButtonComponent,
  onSelect: (icon: null | string) => void
) {
  let menuRef: HTMLDivElement = null;
  const btnEl = btn.buttonEl;

  btn.onClick((e) => {
    e.preventDefault();
    const scrollParent = btnEl.closest('.vertical-tab-content');
    const destroyEventHandlers = () => {
      btnEl.win.removeEventListener('click', clickOutside);
      scrollParent.removeEventListener('scroll', scroll);
    };
    const clickOutside = (e: MouseEvent) => {
      if (menuRef) {
        if (!menuRef.contains(e.targetNode)) {
          menuRef.detach();
          menuRef = null;
          destroyEventHandlers();
        }
      } else {
        destroyEventHandlers();
      }
    };

    const calcMenuPos = () => {
      let pos = `top: ${
        btnEl.offsetTop + btnEl.offsetHeight + 2 - scrollParent.scrollTop
      }px;`;
      if (Platform.isMobile) {
        pos += ` right: ${
          btnEl.offsetParent.clientWidth -
          (btnEl.offsetLeft + btnEl.offsetWidth)
        }px;`;
      } else {
        pos += ` left: ${btnEl.offsetLeft}px;`;
      }
      menuRef.style.cssText = pos;
    };

    const scroll = () => {
      if (menuRef) {
        calcMenuPos();
      } else {
        destroyEventHandlers();
      }
    };

    if (menuRef) {
      destroyEventHandlers();
      menuRef.detach();
      menuRef = null;
      return;
    }

    createDiv('lc-menu', (menu) => {
      menuRef = menu;
      btnEl.after(menuRef);
      calcMenuPos();

      const iconEls: Record<string, HTMLDivElement> = {};

      menu.createDiv('lc-menu-search', (el) => {
        el.createEl(
          'input',
          {
            attr: {
              type: 'text',
              placeholder: 'Search...',
            },
          },
          (input) => {
            activeWindow.setTimeout(() => {
              input.focus();
            });
            const handler = debounce(
              () => {
                const res = icons.search(input.value);

                if (!input.value) {
                  getIconIds().forEach((icon) => {
                    iconList.append(iconEls[icon]);
                  });
                  return;
                }

                iconList.empty();

                res.forEach((r) => {
                  iconList.append(iconEls[r.item.id]);
                });
              },
              250,
              true
            );
            input.addEventListener('input', handler);
          }
        );
      });

      const iconList = menu.createDiv('lc-menu-icons', (el) => {
        // Menu
        getIconIds().forEach((icon) => {
          el.createDiv(
            {
              cls: 'clickable-icon',
              attr: {
                'data-icon': icon,
              },
            },
            (item) => {
              iconEls[icon] = item;
              setIcon(item, icon);
              item.onClickEvent(() => {
                btn.buttonEl.empty();
                btn.setIcon(icon);
                onSelect(icon);
                destroyEventHandlers();
                menuRef.detach();
                menuRef = null;
              });
            }
          );
        });
      });
    });

    btnEl.win.setTimeout(() => {
      btnEl.win.addEventListener('click', clickOutside);
      scrollParent.addEventListener('scroll', scroll);
    }, 10);
  });
}

export function buildSetting(
  containerEl: HTMLElement,
  plugin: ListCalloutsPlugin,
  index: number,
  callout: Callout,
  onDelete: (index: number) => void
) {
  containerEl.createDiv({ cls: 'lc-setting' }, (el) => {
    const calloutContainer = el.createDiv({ cls: 'lc-callout-container' });

    buildSettingCallout(calloutContainer, callout);

    el.createDiv({ cls: 'lc-input-container' }, (inputContainer) => {
      // Character input
      new TextComponent(inputContainer)
        .setValue(callout.char)
        .onChange((value) => {
          if (!value) return;

          plugin.settings[index].char = value;
          plugin.saveSettings();

          buildSettingCallout(calloutContainer, plugin.settings[index]);
        });

      // Icon select menu
      const iconBtn = new ButtonComponent(inputContainer).then((btn) => {
        if (callout.icon) {
          btn.setIcon(callout.icon);
        } else {
          btn.setButtonText('Set Icon');
        }

        attachIconMenu(btn, (icon) => {
          if (icon == null) {
            delete plugin.settings[index].icon;
          } else {
            plugin.settings[index].icon = icon;
          }

          plugin.saveSettings();
          buildSettingCallout(calloutContainer, plugin.settings[index]);
        });
      });

      new ButtonComponent(inputContainer).then((btn) => {
        btn.setButtonText('Clear Icon');
        btn.onClick(() => {
          delete plugin.settings[index].icon;
          iconBtn.buttonEl.empty();
          iconBtn.setButtonText('Set Icon');
          plugin.saveSettings();
          buildSettingCallout(calloutContainer, plugin.settings[index]);
        });
      });

      // Color selection.
      if (callout.custom) {
        const [r, g, b] = callout.color
          .split(',')
          .map((v) => parseInt(v.trim(), 10));

        const color = new ColorComponent(inputContainer)
          .setValueRgb({ r, g, b })
          .onChange((_value) => {
            const { r, g, b } = color.getValueRgb();
            plugin.settings[index].color = `${r}, ${g}, ${b}`;

            plugin.saveSettings();
            buildSettingCallout(calloutContainer, plugin.settings[index]);
          });
      }

      // Delete button.
      if (callout.custom) {
        const rightAlign = inputContainer.createDiv({
          cls: 'lc-input-right-align',
        });
        new ButtonComponent(rightAlign)
          .setButtonText('Delete')
          .setWarning()
          .onClick((_e) => {
            onDelete(index);
          });
      }
    });
  });
}

function buildNewCalloutSetting(
  containerEl: HTMLElement,
  plugin: ListCalloutsPlugin,
  onSubmit: (callout: Callout) => void
) {
  const callout: Callout = {
    char: '',
    color: '158, 158, 158',
    icon: null,
    custom: true,
  };

  containerEl.createDiv({ cls: 'lc-setting' }, (settingContainer) => {
    settingContainer.createDiv({ cls: 'setting-item-name' }, (e) =>
      e.setText('Create a new Callout')
    );
    settingContainer.createDiv({ cls: 'setting-item-description' }, (e) =>
      e.setText('Create additional list callout styles.')
    );

    // Preview.
    const calloutContainer = settingContainer.createDiv({
      cls: 'lc-callout-container',
    });

    // Callout character.
    const inputContainer = settingContainer.createDiv({
      cls: 'lc-input-container',
    });

    const char = new TextComponent(inputContainer)
      .setValue('')
      .setPlaceholder('...')
      .onChange((value) => {
        callout.char = value;
        redraw();
      });

    // Callout icon.
    const icon = new ButtonComponent(inputContainer).setButtonText('Set Icon');

    attachIconMenu(icon, (icon) => {
      if (icon == null) {
        delete callout.icon;
      } else {
        callout.icon = icon;
      }
      redraw();
    });

    // Callout color.
    const color = new ColorComponent(inputContainer)
      .setValueRgb({ r: 127, g: 127, b: 127 })
      .onChange((_value) => {
        const { r, g, b } = color.getValueRgb();
        callout.color = `${r}, ${g}, ${b}`;
        redraw();
      });

    // Create button.
    const rightAlign = inputContainer.createDiv({
      cls: 'lc-input-right-align',
    });
    const submit = new ButtonComponent(rightAlign)
      .setButtonText('Create')
      .setDisabled(true)
      .onClick(() => {
        onSubmit(callout);
      });

    // Redraw callout/settings.
    function redraw() {
      buildSettingCallout(calloutContainer, callout);

      const hasNoCharacter = callout.char.length === 0;
      const hasConflictingCharacter =
        plugin.settings.find((c) => c.char === char.getValue()) !== undefined;

      submit.setDisabled(hasNoCharacter || hasConflictingCharacter);
    }

    redraw();
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
          'See the Style Settings plugin for additional configuration options.'
        );
        f.append(createEl('br'));
        f.append(
          createEl('strong', {
            text: 'Note: Using +, *, -, >, or # as the callout character can disrupt reading mode.',
          })
        );
      })
    );

    this.plugin.settings.forEach((callout, index) => {
      buildSetting(
        containerEl,
        this.plugin,
        index,
        callout,
        (indexToDelete) => {
          this.plugin.settings.splice(indexToDelete, 1);
          this.plugin.saveSettings();

          // Re-draw.
          this.display();
        }
      );
    });

    buildNewCalloutSetting(containerEl, this.plugin, (callout) => {
      this.plugin.settings.push(callout);
      this.plugin.saveSettings();

      // Re-draw.
      this.display();
    });
  }
}
