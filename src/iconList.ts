import Fuse from 'fuse.js';
import { getIconIds } from 'obsidian';

interface IconDefinition {
  id: string;
  aliases: string[];
}

// Since Obsidian 1.7 includes Lucide v0.446.0, we can use getIconIds() directly
export const iconListRaw: IconDefinition[] = getIconIds().map(id => ({
  id,
  aliases: [] as string[]
}));

export const iconList = new Fuse(iconListRaw, {
  threshold: 0.1,
  minMatchCharLength: 2,
  keys: ['id', 'aliases'],
});
