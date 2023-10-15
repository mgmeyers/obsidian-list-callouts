import Fuse from 'fuse.js';
import { getIconIds } from 'obsidian';

export const iconListRaw = [
  {
    id: 'lucide-accessibility',
    aliases: ['disability', 'disabled', 'dda', 'wheelchair'],
  },
  {
    id: 'lucide-activity',
    aliases: ['pulse', 'health', 'action', 'motion'],
  },
  {
    id: 'lucide-air-vent',
    aliases: [
      'air conditioner',
      'ac',
      'central air',
      'cooling',
      'climate-control',
    ],
  },
  {
    id: 'lucide-airplay',
    aliases: ['stream', 'cast', 'mirroring'],
  },
  {
    id: 'lucide-alarm-check',
    aliases: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-alarm-clock-off',
    aliases: ['morning', 'turn-off'],
  },
  {
    id: 'lucide-alarm-clock',
    aliases: ['morning'],
  },
  {
    id: 'lucide-alarm-minus',
    aliases: ['remove'],
  },
  {
    id: 'lucide-alarm-plus',
    aliases: ['add'],
  },
  {
    id: 'lucide-album',
    aliases: ['photo', 'book'],
  },
  {
    id: 'lucide-alert-circle',
    aliases: ['warning', 'alert', 'danger', 'exclamation mark'],
  },
  {
    id: 'lucide-alert-octagon',
    aliases: ['warning', 'alert', 'danger', 'exclamation mark'],
  },
  {
    id: 'lucide-alert-triangle',
    aliases: ['warning', 'alert', 'danger', 'exclamation mark'],
  },
  {
    id: 'lucide-align-center-horizontal',
    aliases: ['items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-center-vertical',
    aliases: ['items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-center',
    aliases: ['text', 'alignment', 'center'],
  },
  {
    id: 'lucide-align-end-horizontal',
    aliases: ['items', 'bottom', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-end-vertical',
    aliases: ['items', 'right', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-distribute-center',
    aliases: ['items', 'flex', 'justify', 'space', 'evenly', 'around'],
  },
  {
    id: 'lucide-align-horizontal-distribute-end',
    aliases: ['right', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-distribute-start',
    aliases: ['left', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-justify-center',
    aliases: ['center', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-justify-end',
    aliases: ['right', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-justify-start',
    aliases: ['left', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-horizontal-space-around',
    aliases: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-align-horizontal-space-between',
    aliases: ['around', 'items', 'bottom', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-justify',
    aliases: ['text', 'alignment', 'justified'],
  },
  {
    id: 'lucide-align-left',
    aliases: ['text', 'alignment', 'left'],
  },
  {
    id: 'lucide-align-right',
    aliases: ['text', 'alignment', 'right'],
  },
  {
    id: 'lucide-align-start-horizontal',
    aliases: ['top', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-start-vertical',
    aliases: ['left', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-vertical-distribute-center',
    aliases: ['items', 'flex', 'justify', 'space', 'evenly', 'around'],
  },
  {
    id: 'lucide-align-vertical-distribute-end',
    aliases: ['bottom', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-vertical-distribute-start',
    aliases: ['top', 'items', 'flex', 'justify'],
  },
  {
    id: 'lucide-align-vertical-justify-center',
    aliases: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-align-vertical-justify-end',
    aliases: ['bottom', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-align-vertical-justify-start',
    aliases: ['top', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-align-vertical-space-around',
    aliases: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-align-vertical-space-between',
    aliases: ['center', 'items', 'flex', 'justify', 'distribute', 'between'],
  },
  {
    id: 'lucide-anchor',
    aliases: ['ship'],
  },
  {
    id: 'lucide-angry',
    aliases: ['emoji', 'anger', 'face', 'emotion'],
  },
  {
    id: 'lucide-annoyed',
    aliases: ['emoji', 'nuisance', 'face', 'emotion'],
  },
  {
    id: 'lucide-aperture',
    aliases: ['camera', 'photo'],
  },
  {
    id: 'lucide-apple',
    aliases: ['fruit', 'food'],
  },
  {
    id: 'lucide-archive-restore',
    aliases: ['archive', 'unarchive', 'restore', 'index', 'box'],
  },
  {
    id: 'lucide-archive',
    aliases: ['index', 'box'],
  },
  {
    id: 'lucide-armchair',
    aliases: ['sofa', 'furniture', 'leisure', 'lounge', 'loveseat', 'couch'],
  },
  {
    id: 'lucide-arrow-big-down',
    aliases: ['key'],
  },
  {
    id: 'lucide-arrow-big-left',
    aliases: ['key'],
  },
  {
    id: 'lucide-arrow-big-right',
    aliases: ['key', 'forward'],
  },
  {
    id: 'lucide-arrow-big-up',
    aliases: ['key', 'forward'],
  },
  {
    id: 'lucide-arrow-down-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-down-left-from-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-down-left',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-down-right-from-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-down-right',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-down',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-left-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-left-right',
    aliases: [
      'bidirectional',
      'direction',
      'swap',
      'switch',
      'transaction',
      'reorder',
      'move',
    ],
  },
  {
    id: 'lucide-arrow-left',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-right-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-right',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-up-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-up-down',
    aliases: [
      'bidirectional',
      'direction',
      'swap',
      'switch',
      'network',
      'mobile data',
      'internet',
      'reorder',
      'move',
    ],
  },
  {
    id: 'lucide-arrow-up-left-from-circle',
    aliases: ['direction', 'keyboard', 'key', 'escape', 'button'],
  },
  {
    id: 'lucide-arrow-up-left',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-up-right-from-circle',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-up-right',
    aliases: ['direction'],
  },
  {
    id: 'lucide-arrow-up',
    aliases: ['direction'],
  },
  {
    id: 'lucide-asterisk',
    aliases: ['reference'],
  },
  {
    id: 'lucide-at-sign',
    aliases: ['mention', 'at', 'email', 'message'],
  },
  {
    id: 'lucide-atom',
    aliases: [
      'atomic',
      'nuclear',
      'physics',
      'particle',
      'element',
      'molecule',
    ],
  },
  {
    id: 'lucide-award',
    aliases: ['achievement', 'badge'],
  },
  {
    id: 'lucide-axe',
    aliases: ['hatchet'],
  },
  {
    id: 'lucide-axis-3d',
    aliases: ['gizmo', 'coordinates'],
  },
  {
    id: 'lucide-baby',
    aliases: ['child', 'childproof', 'children'],
  },
  {
    id: 'lucide-backpack',
    aliases: ['bag', 'hiking', 'travel', 'camping', 'school', 'childhood'],
  },
  {
    id: 'lucide-baggage-claim',
    aliases: ['baggage', 'luggage', 'travel', 'cart', 'trolley', 'suitcase'],
  },
  {
    id: 'lucide-ban',
    aliases: [
      'cancel',
      'no',
      'stop',
      'forbidden',
      'prohibited',
      'error',
      'slash',
    ],
  },
  {
    id: 'lucide-banana',
    aliases: ['fruit', 'food'],
  },
  {
    id: 'lucide-banknote',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-bar-chart-2',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-bar-chart-3',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-bar-chart-4',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-bar-chart-horizontal',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-bar-chart',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-baseline',
    aliases: ['text', 'format', 'color'],
  },
  {
    id: 'lucide-bath',
    aliases: ['amenities', 'services', 'bathroom', 'shower'],
  },
  {
    id: 'lucide-battery-charging',
    aliases: ['power', 'electricity', 'accumulator', 'charge'],
  },
  {
    id: 'lucide-battery-full',
    aliases: ['power', 'electricity', 'accumulator', 'charge'],
  },
  {
    id: 'lucide-battery-low',
    aliases: ['power', 'electricity', 'accumulator', 'charge'],
  },
  {
    id: 'lucide-battery-medium',
    aliases: ['power', 'electricity', 'accumulator', 'charge'],
  },
  {
    id: 'lucide-battery-warning',
    aliases: [
      'power',
      'electricity',
      'accumulator',
      'charge',
      'exclamation mark',
    ],
  },
  {
    id: 'lucide-battery',
    aliases: ['power', 'electricity', 'accumulator', 'charge'],
  },
  {
    id: 'lucide-beaker',
    aliases: ['cup', 'lab', 'chemistry', 'experiment', 'test'],
  },
  {
    id: 'lucide-bean-off',
    aliases: [
      'soy free',
      'legume',
      'soy',
      'food',
      'seed',
      'allergy',
      'intolerance',
      'diet',
    ],
  },
  {
    id: 'lucide-bean',
    aliases: ['legume', 'soy', 'food', 'seed'],
  },
  {
    id: 'lucide-bed-double',
    aliases: ['sleep', 'hotel', 'furniture'],
  },
  {
    id: 'lucide-bed-single',
    aliases: ['sleep', 'hotel', 'furniture'],
  },
  {
    id: 'lucide-bed',
    aliases: ['sleep', 'hotel', 'furniture'],
  },
  {
    id: 'lucide-beef',
    aliases: [
      'food',
      'dish',
      'restaurant',
      'course',
      'meal',
      'meat',
      'bbq',
      'steak',
    ],
  },
  {
    id: 'lucide-beer',
    aliases: ['alcohol', 'bar', 'beverage', 'brewery', 'drink'],
  },
  {
    id: 'lucide-bell-minus',
    aliases: [
      'alarm',
      'notification',
      'silent',
      'reminder',
      'delete',
      'remove',
      'erase',
    ],
  },
  {
    id: 'lucide-bell-off',
    aliases: ['alarm', 'notification', 'silent', 'reminder'],
  },
  {
    id: 'lucide-bell-plus',
    aliases: ['notification', 'silent', 'reminder', 'add', 'create', 'new'],
  },
  {
    id: 'lucide-bell-ring',
    aliases: ['alarm', 'notification', 'sound', 'reminder'],
  },
  {
    id: 'lucide-bell',
    aliases: ['alarm', 'notification', 'sound', 'reminder'],
  },
  {
    id: 'lucide-bike',
    aliases: ['bicycle', 'transport', 'trip'],
  },
  {
    id: 'lucide-binary',
    aliases: ['code', 'digits', 'computer', 'zero', 'one'],
  },
  {
    id: 'lucide-bird',
    aliases: ['peace', 'freedom', 'wing', 'avian'],
  },
  {
    id: 'lucide-bitcoin',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-blinds',
    aliases: [
      'shades',
      'screen',
      'curtain',
      'shutter',
      'roller blind',
      'window',
      'lighting',
      'household',
      'home',
    ],
  },
  {
    id: 'lucide-bluetooth-connected',
    aliases: ['paired'],
  },
  {
    id: 'lucide-bluetooth-off',
    aliases: ['lost'],
  },
  {
    id: 'lucide-bluetooth-searching',
    aliases: ['pairing'],
  },
  {
    id: 'lucide-bluetooth',
    aliases: ['wireless'],
  },
  {
    id: 'lucide-bold',
    aliases: ['text', 'strong', 'format'],
  },
  {
    id: 'lucide-bomb',
    aliases: [
      'fatal',
      'error',
      'crash',
      'blockbuster',
      'mine',
      'explosion',
      'explode',
      'explosive',
    ],
  },
  {
    id: 'lucide-bone',
    aliases: ['medical', 'health', 'death', 'pet', 'gaming'],
  },
  {
    id: 'lucide-book-copy',
    aliases: [
      'read',
      'dictionary',
      'booklet',
      'library',
      'code',
      'version control',
      'git',
      'repository',
      'clone',
    ],
  },
  {
    id: 'lucide-book-down',
    aliases: ['code', 'version control', 'git', 'repository', 'pull'],
  },
  {
    id: 'lucide-book-key',
    aliases: ['code', 'version control', 'git', 'repository', 'private'],
  },
  {
    id: 'lucide-book-lock',
    aliases: ['code', 'version control', 'git', 'repository', 'private'],
  },
  {
    id: 'lucide-book-marked',
    aliases: [
      'read',
      'dictionary',
      'booklet',
      'library',
      'code',
      'version control',
      'git',
      'repository',
    ],
  },
  {
    id: 'lucide-book-minus',
    aliases: [
      'code',
      'version control',
      'git',
      'repository',
      'remove',
      'delete',
    ],
  },
  {
    id: 'lucide-book-open-check',
    aliases: [
      'read',
      'library',
      'plain language',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-book-open',
    aliases: ['read', 'library'],
  },
  {
    id: 'lucide-book-plus',
    aliases: ['code', 'version control', 'git', 'repository', 'add'],
  },
  {
    id: 'lucide-book-template',
    aliases: ['read', 'code', 'version control', 'git', 'repository', 'dashed'],
  },
  {
    id: 'lucide-book-up',
    aliases: ['code', 'version control', 'git', 'repository', 'push'],
  },
  {
    id: 'lucide-book-x',
    aliases: [
      'code',
      'version control',
      'git',
      'repository',
      'remove',
      'delete',
    ],
  },
  {
    id: 'lucide-book',
    aliases: ['read', 'dictionary', 'booklet', 'magazine', 'library'],
  },
  {
    id: 'lucide-bookmark-minus',
    aliases: ['delete', 'remove'],
  },
  {
    id: 'lucide-bookmark-plus',
    aliases: ['add'],
  },
  {
    id: 'lucide-bookmark',
    aliases: ['read', 'clip', 'marker', 'tag'],
  },
  {
    id: 'lucide-bot',
    aliases: ['robot', 'ai'],
  },
  {
    id: 'lucide-box-select',
    aliases: ['selection', 'square', 'rectangular', 'marquee', 'tool'],
  },
  {
    id: 'lucide-box',
    aliases: ['cube', 'package'],
  },
  {
    id: 'lucide-boxes',
    aliases: [
      'cubes',
      'packages',
      'parts',
      'group',
      'units',
      'collection',
      'cluster',
    ],
  },
  {
    id: 'lucide-brain-circuit',
    aliases: [
      'mind',
      'intellect',
      'artificial intelligence',
      'ai',
      'deep learning',
      'machine learning',
      'computing',
    ],
  },
  {
    id: 'lucide-brain-cog',
    aliases: [
      'mind',
      'intellect',
      'artificial intelligence',
      'ai',
      'deep learning',
      'machine learning',
      'computing',
    ],
  },
  {
    id: 'lucide-brain',
    aliases: [
      'medical',
      'mind',
      'intellect',
      'cerebral',
      'consciousness',
      'genius',
      'artificial intelligence',
      'ai',
    ],
  },
  {
    id: 'lucide-briefcase',
    aliases: ['work', 'bag', 'baggage', 'folder'],
  },
  {
    id: 'lucide-brush',
    aliases: ['draw', 'paint', 'color'],
  },
  {
    id: 'lucide-bug',
    aliases: ['issue', 'report', 'insect'],
  },
  {
    id: 'lucide-building-2',
    aliases: [
      'business',
      'company',
      'enterprise',
      'skyscraper',
      'organisation',
      'organization',
    ],
  },
  {
    id: 'lucide-building',
    aliases: ['organisation', 'organization'],
  },
  {
    id: 'lucide-bus',
    aliases: ['bus', 'vehicle', 'transport', 'trip'],
  },
  {
    id: 'lucide-cake',
    aliases: ['birthday', 'birthdate', 'celebration', 'party'],
  },
  {
    id: 'lucide-calculator',
    aliases: ['count', 'calculating machine'],
  },
  {
    id: 'lucide-calendar-check-2',
    aliases: [
      'date',
      'time',
      'event',
      'confirm',
      'subscribe',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-calendar-check',
    aliases: [
      'date',
      'time',
      'event',
      'confirm',
      'subscribe',
      'schedule',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-calendar-clock',
    aliases: ['date', 'time', 'event', 'clock'],
  },
  {
    id: 'lucide-calendar-days',
    aliases: ['date', 'time', 'event'],
  },
  {
    id: 'lucide-calendar-heart',
    aliases: ['date', 'time', 'event', 'heart', 'favourite', 'subscribe'],
  },
  {
    id: 'lucide-calendar-minus',
    aliases: ['date', 'time', 'event', 'delete', 'remove'],
  },
  {
    id: 'lucide-calendar-off',
    aliases: ['date', 'time', 'event', 'delete', 'remove'],
  },
  {
    id: 'lucide-calendar-plus',
    aliases: ['date', 'time', 'event', 'add', 'subscribe', 'create', 'new'],
  },
  {
    id: 'lucide-calendar-range',
    aliases: ['date', 'time', 'event', 'range', 'period'],
  },
  {
    id: 'lucide-calendar-search',
    aliases: ['date', 'time', 'search', 'events'],
  },
  {
    id: 'lucide-calendar-x-2',
    aliases: ['date', 'time', 'event', 'remove'],
  },
  {
    id: 'lucide-calendar-x',
    aliases: ['date', 'time', 'event', 'remove', 'busy'],
  },
  {
    id: 'lucide-calendar',
    aliases: ['date', 'birthdate', 'birthday', 'time', 'event'],
  },
  {
    id: 'lucide-camera-off',
    aliases: ['photo', 'webcam', 'video'],
  },
  {
    id: 'lucide-camera',
    aliases: ['photo', 'webcam', 'video'],
  },
  {
    id: 'lucide-candy-off',
    aliases: ['sugar free', 'food', 'sweet', 'allergy', 'intolerance', 'diet'],
  },
  {
    id: 'lucide-candy',
    aliases: ['sugar', 'food', 'sweet'],
  },
  {
    id: 'lucide-car',
    aliases: ['vehicle', 'transport', 'trip'],
  },
  {
    id: 'lucide-carrot',
    aliases: ['vegetable', 'food', 'eat'],
  },
  {
    id: 'lucide-case-lower',
    aliases: ['text', 'letters', 'characters', 'font', 'typography'],
  },
  {
    id: 'lucide-case-sensitive',
    aliases: ['text', 'letters', 'characters', 'font', 'typography'],
  },
  {
    id: 'lucide-case-upper',
    aliases: ['text', 'letters', 'characters', 'font', 'typography'],
  },
  {
    id: 'lucide-cast',
    aliases: ['chromecast', 'airplay'],
  },
  {
    id: 'lucide-castle',
    aliases: ['fortress', 'stronghold', 'palace', 'chateau', 'building'],
  },
  {
    id: 'lucide-cat',
    aliases: ['animal', 'pet', 'kitten', 'feline'],
  },
  {
    id: 'lucide-check-check',
    aliases: ['done', 'received', 'double', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-check-circle-2',
    aliases: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-check-circle',
    aliases: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-check-square',
    aliases: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-check',
    aliases: ['done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-chef-hat',
    aliases: ['cooking', 'food', 'kitchen', 'restaurant'],
  },
  {
    id: 'lucide-cherry',
    aliases: ['fruit', 'food'],
  },
  {
    id: 'lucide-chevron-down-square',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevron-down',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevron-first',
    aliases: ['arrow', 'previous', 'music'],
  },
  {
    id: 'lucide-chevron-last',
    aliases: ['arrow', 'skip', 'next', 'music'],
  },
  {
    id: 'lucide-chevron-left-square',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevron-left',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevron-right-square',
    aliases: ['code', 'command line', 'terminal', 'prompt', 'shell', 'console'],
  },
  {
    id: 'lucide-chevron-right',
    aliases: ['arrow', 'code', 'command line', 'terminal', 'prompt', 'shell'],
  },
  {
    id: 'lucide-chevron-up-square',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevron-up',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevrons-down-up',
    aliases: ['arrow', 'collapse', 'fold', 'vertical'],
  },
  {
    id: 'lucide-chevrons-down',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevrons-left-right',
    aliases: ['arrow', 'expand', 'horizontal', 'unfold'],
  },
  {
    id: 'lucide-chevrons-left',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevrons-right-left',
    aliases: ['arrow', 'collapse', 'fold', 'horizontal'],
  },
  {
    id: 'lucide-chevrons-right',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chevrons-up-down',
    aliases: ['arrow', 'expand', 'unfold', 'vertical'],
  },
  {
    id: 'lucide-chevrons-up',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-chrome',
    aliases: ['browser', 'logo'],
  },
  {
    id: 'lucide-church',
    aliases: ['temple', 'building'],
  },
  {
    id: 'lucide-cigarette-off',
    aliases: ['smoking', 'no-smoking'],
  },
  {
    id: 'lucide-cigarette',
    aliases: ['smoking'],
  },
  {
    id: 'lucide-circle-dot',
    aliases: ['pending', 'dot', 'progress', 'issue'],
  },
  {
    id: 'lucide-circle-ellipsis',
    aliases: ['pending', 'ellipsis', 'progress'],
  },
  {
    id: 'lucide-circle-equal',
    aliases: ['calculate', 'maths', 'shape'],
  },
  {
    id: 'lucide-circle-off',
    aliases: [
      'diameter',
      'zero',
      'Ø',
      'null',
      'nothing',
      'cancel',
      'ban',
      'no',
      'stop',
      'forbidden',
      'prohibited',
      'error',
    ],
  },
  {
    id: 'lucide-circle-slash-2',
    aliases: [
      'diameter',
      'zero',
      'Ø',
      'null',
      'nothing',
      'maths',
      'circle-slashed',
    ],
  },
  {
    id: 'lucide-circle-slash',
    aliases: [
      'diameter',
      'zero',
      'Ø',
      'null',
      'nothing',
      'cancel',
      'ban',
      'no',
      'stop',
      'forbidden',
      'prohibited',
      'error',
    ],
  },
  {
    id: 'lucide-circle',
    aliases: ['off', 'zero', 'record', 'shape'],
  },
  {
    id: 'lucide-circuit-board',
    aliases: ['computing', 'electricity', 'electronics'],
  },
  {
    id: 'lucide-citrus',
    aliases: ['lemon', 'orange', 'grapefruit', 'fruit'],
  },
  {
    id: 'lucide-clapperboard',
    aliases: ['movie', 'film', 'video', 'camera', 'tv', 'television'],
  },
  {
    id: 'lucide-clipboard-check',
    aliases: ['copied', 'pasted', 'done', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-clipboard-copy',
    aliases: ['copy', 'paste'],
  },
  {
    id: 'lucide-clipboard-edit',
    aliases: ['edit', 'paste', 'signature'],
  },
  {
    id: 'lucide-clipboard-list',
    aliases: ['copy', 'paste', 'tasks'],
  },
  {
    id: 'lucide-clipboard-paste',
    aliases: ['copy', 'paste'],
  },
  {
    id: 'lucide-clipboard-signature',
    aliases: ['paste', 'signature'],
  },
  {
    id: 'lucide-clipboard-type',
    aliases: ['paste', 'format', 'text'],
  },
  {
    id: 'lucide-clipboard-x',
    aliases: ['copy', 'paste', 'discard', 'remove'],
  },
  {
    id: 'lucide-clipboard',
    aliases: ['copy', 'paste'],
  },
  {
    id: 'lucide-clock-1',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-10',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-11',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-12',
    aliases: ['time', 'watch', 'alarm', 'noon', 'midnight'],
  },
  {
    id: 'lucide-clock-2',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-3',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-4',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-5',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-6',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-7',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-8',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock-9',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-clock',
    aliases: ['time', 'watch', 'alarm'],
  },
  {
    id: 'lucide-cloud-cog',
    aliases: ['computing', 'ai', 'cluster', 'network'],
  },
  {
    id: 'lucide-cloud-drizzle',
    aliases: ['weather', 'shower'],
  },
  {
    id: 'lucide-cloud-fog',
    aliases: ['weather', 'mist'],
  },
  {
    id: 'lucide-cloud-hail',
    aliases: ['weather', 'rainfall'],
  },
  {
    id: 'lucide-cloud-lightning',
    aliases: ['weather', 'bolt'],
  },
  {
    id: 'lucide-cloud-moon-rain',
    aliases: ['weather', 'partly', 'night', 'rainfall'],
  },
  {
    id: 'lucide-cloud-moon',
    aliases: ['weather', 'night'],
  },
  {
    id: 'lucide-cloud-off',
    aliases: ['disconnect'],
  },
  {
    id: 'lucide-cloud-rain-wind',
    aliases: ['weather', 'rainfall'],
  },
  {
    id: 'lucide-cloud-rain',
    aliases: ['weather', 'rainfall'],
  },
  {
    id: 'lucide-cloud-snow',
    aliases: ['weather', 'blizzard'],
  },
  {
    id: 'lucide-cloud-sun-rain',
    aliases: ['weather', 'partly', 'rainfall'],
  },
  {
    id: 'lucide-cloud-sun',
    aliases: ['weather', 'partly'],
  },
  {
    id: 'lucide-cloud',
    aliases: ['weather'],
  },
  {
    id: 'lucide-cloudy',
    aliases: ['weather', 'clouds'],
  },
  {
    id: 'lucide-clover',
    aliases: ['leaf', 'luck', 'plant'],
  },
  {
    id: 'lucide-code-2',
    aliases: ['source', 'programming', 'html', 'xml'],
  },
  {
    id: 'lucide-code',
    aliases: ['source', 'programming', 'html', 'xml'],
  },
  {
    id: 'lucide-codepen',
    aliases: ['logo'],
  },
  {
    id: 'lucide-codesandbox',
    aliases: ['logo'],
  },
  {
    id: 'lucide-coffee',
    aliases: ['drink', 'cup', 'mug', 'tea', 'cafe', 'hot', 'beverage'],
  },
  {
    id: 'lucide-cog',
    aliases: ['computing', 'settings', 'cog', 'edit', 'gear', 'preferences'],
  },
  {
    id: 'lucide-coins',
    aliases: ['money', 'cash', 'finance', 'gamble'],
  },
  {
    id: 'lucide-columns',
    aliases: ['layout'],
  },
  {
    id: 'lucide-command',
    aliases: ['keyboard', 'cmd', 'terminal', 'prompt'],
  },
  {
    id: 'lucide-compass',
    aliases: ['navigation', 'safari', 'travel', 'direction'],
  },
  {
    id: 'lucide-component',
    aliases: ['design', 'element', 'group', 'module', 'part', 'symbol'],
  },
  {
    id: 'lucide-concierge-bell',
    aliases: ['reception', 'bell', 'porter'],
  },
  {
    id: 'lucide-construction',
    aliases: ['roadwork', 'maintenance', 'blockade', 'barricade'],
  },
  {
    id: 'lucide-contact',
    aliases: ['person', 'user'],
  },
  {
    id: 'lucide-contrast',
    aliases: ['display', 'accessibility'],
  },
  {
    id: 'lucide-cookie',
    aliases: ['biscuit', 'privacy', 'legal', 'food'],
  },
  {
    id: 'lucide-copy-check',
    aliases: ['clone', 'duplicate', 'done', 'multiple'],
  },
  {
    id: 'lucide-copy-minus',
    aliases: ['clone', 'duplicate', 'remove', 'delete', 'collapse', 'multiple'],
  },
  {
    id: 'lucide-copy-plus',
    aliases: ['clone', 'duplicate', 'add', 'multiple'],
  },
  {
    id: 'lucide-copy-slash',
    aliases: [
      'clone',
      'duplicate',
      'cancel',
      'ban',
      'no',
      'stop',
      'forbidden',
      'prohibited',
      'error',
      'multiple',
    ],
  },
  {
    id: 'lucide-copy-x',
    aliases: ['cancel', 'close', 'delete', 'remove', 'clear', 'multiple'],
  },
  {
    id: 'lucide-copy',
    aliases: ['clone', 'duplicate', 'multiple'],
  },
  {
    id: 'lucide-copyleft',
    aliases: ['licence'],
  },
  {
    id: 'lucide-copyright',
    aliases: ['licence', 'license'],
  },
  {
    id: 'lucide-corner-down-left',
    aliases: ['arrow', 'return'],
  },
  {
    id: 'lucide-corner-down-right',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-left-down',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-left-up',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-right-down',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-right-up',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-up-left',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-corner-up-right',
    aliases: ['arrow'],
  },
  {
    id: 'lucide-cpu',
    aliases: ['processor', 'technology', 'computer', 'chip'],
  },
  {
    id: 'lucide-creative-commons',
    aliases: ['licence', 'license'],
  },
  {
    id: 'lucide-credit-card',
    aliases: ['bank', 'purchase', 'payment', 'cc'],
  },
  {
    id: 'lucide-croissant',
    aliases: ['bakery', 'cooking', 'food', 'pastry'],
  },
  {
    id: 'lucide-crop',
    aliases: ['photo', 'image'],
  },
  {
    id: 'lucide-cross',
    aliases: ['healthcare', 'first aid'],
  },
  {
    id: 'lucide-crosshair',
    aliases: ['aim', 'target'],
  },
  {
    id: 'lucide-crown',
    aliases: ['king', 'winner', 'favourite'],
  },
  {
    id: 'lucide-cup-soda',
    aliases: ['beverage', 'cup', 'drink', 'soda', 'straw', 'water'],
  },
  {
    id: 'lucide-curly-braces',
    aliases: ['json', 'code', 'token'],
  },
  {
    id: 'lucide-currency',
    aliases: ['finance', 'money'],
  },
  {
    id: 'lucide-database-backup',
    aliases: [
      'storage',
      'memory',
      'backup',
      'timemachine',
      'rotate',
      'arrow',
      'left',
    ],
  },
  {
    id: 'lucide-database',
    aliases: ['storage', 'memory'],
  },
  {
    id: 'lucide-delete',
    aliases: ['backspace', 'remove'],
  },
  {
    id: 'lucide-diamond',
    aliases: ['square', 'rectangle', 'oblique', 'rhombus', 'shape'],
  },
  {
    id: 'lucide-dice-1',
    aliases: ['dice', 'random', 'tabletop', '1', 'board', 'game'],
  },
  {
    id: 'lucide-dice-2',
    aliases: ['dice', 'random', 'tabletop', '2', 'board', 'game'],
  },
  {
    id: 'lucide-dice-3',
    aliases: ['dice', 'random', 'tabletop', '3', 'board', 'game'],
  },
  {
    id: 'lucide-dice-4',
    aliases: ['dice', 'random', 'tabletop', '4', 'board', 'game'],
  },
  {
    id: 'lucide-dice-5',
    aliases: ['dice', 'random', 'tabletop', '5', 'board', 'game'],
  },
  {
    id: 'lucide-dice-6',
    aliases: ['dice', 'random', 'tabletop', '6', 'board', 'game'],
  },
  {
    id: 'lucide-dices',
    aliases: ['dice', 'random', 'tabletop', 'board', 'game'],
  },
  {
    id: 'lucide-diff',
    aliases: ['patch', 'difference', 'plus', 'minus', 'plus-minus', 'maths'],
  },
  {
    id: 'lucide-disc-2',
    aliases: ['album', 'vinyl', 'record', 'music'],
  },
  {
    id: 'lucide-disc',
    aliases: ['album', 'cd', 'dvd', 'music'],
  },
  {
    id: 'lucide-divide-circle',
    aliases: ['calculate', 'maths'],
  },
  {
    id: 'lucide-divide-square',
    aliases: ['calculate', 'maths'],
  },
  {
    id: 'lucide-divide',
    aliases: ['calculate', 'maths'],
  },
  {
    id: 'lucide-dna-off',
    aliases: [
      'gene',
      'gmo free',
      'helix',
      'heredity',
      'chromosome',
      'nucleic acid',
    ],
  },
  {
    id: 'lucide-dna',
    aliases: ['gene', 'gmo', 'helix', 'heredity', 'chromosome', 'nucleic acid'],
  },
  {
    id: 'lucide-dog',
    aliases: ['animal', 'pet', 'puppy', 'hound', 'canine'],
  },
  {
    id: 'lucide-dollar-sign',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-door-closed',
    aliases: [
      'entrance',
      'entry',
      'exit',
      'ingress',
      'egress',
      'gate',
      'gateway',
      'emergency exit',
    ],
  },
  {
    id: 'lucide-door-open',
    aliases: [
      'entrance',
      'entry',
      'exit',
      'ingress',
      'egress',
      'gate',
      'gateway',
      'emergency exit',
    ],
  },
  {
    id: 'lucide-download-cloud',
    aliases: ['import'],
  },
  {
    id: 'lucide-download',
    aliases: ['import', 'export'],
  },
  {
    id: 'lucide-dribbble',
    aliases: ['design', 'social'],
  },
  {
    id: 'lucide-droplet',
    aliases: ['water', 'weather'],
  },
  {
    id: 'lucide-droplets',
    aliases: ['water', 'humidity', 'weather'],
  },
  {
    id: 'lucide-drumstick',
    aliases: ['food', 'chicken', 'meat'],
  },
  {
    id: 'lucide-dumbbell',
    aliases: ['barbell', 'weight', 'workout', 'gym'],
  },
  {
    id: 'lucide-ear-off',
    aliases: [
      'hearing',
      'hard of hearing',
      'hearing loss',
      'deafness',
      'noise',
      'silence',
      'audio',
      'accessibility',
    ],
  },
  {
    id: 'lucide-ear',
    aliases: ['hearing', 'noise', 'audio', 'accessibility'],
  },
  {
    id: 'lucide-edit-2',
    aliases: ['pencil', 'change', 'pen'],
  },
  {
    id: 'lucide-edit-3',
    aliases: ['pencil', 'change', 'pen-line'],
  },
  {
    id: 'lucide-edit',
    aliases: ['pencil', 'change', 'pen-box'],
  },
  {
    id: 'lucide-egg-fried',
    aliases: ['food', 'breakfast'],
  },
  {
    id: 'lucide-egg-off',
    aliases: ['egg free', 'food'],
  },
  {
    id: 'lucide-egg',
    aliases: ['food', 'bird', 'chick'],
  },
  {
    id: 'lucide-equal-not',
    aliases: ['calculate', 'off', 'maths'],
  },
  {
    id: 'lucide-equal',
    aliases: ['calculate', 'maths'],
  },
  {
    id: 'lucide-eraser',
    aliases: ['pencil', 'drawing', 'undo', 'delete', 'clear'],
  },
  {
    id: 'lucide-euro',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-expand',
    aliases: ['scale', 'fullscreen'],
  },
  {
    id: 'lucide-external-link',
    aliases: ['outbound'],
  },
  {
    id: 'lucide-eye-off',
    aliases: ['view', 'watch', 'hide', 'hidden'],
  },
  {
    id: 'lucide-eye',
    aliases: ['view', 'watch'],
  },
  {
    id: 'lucide-facebook',
    aliases: ['logo', 'social'],
  },
  {
    id: 'lucide-factory',
    aliases: [
      'building',
      'business',
      'energy',
      'industry',
      'manufacture',
      'sector',
    ],
  },
  {
    id: 'lucide-fan',
    aliases: ['air', 'cooler', 'ventilation', 'ventilator', 'blower'],
  },
  {
    id: 'lucide-fast-forward',
    aliases: ['music'],
  },
  {
    id: 'lucide-feather',
    aliases: ['logo'],
  },
  {
    id: 'lucide-figma',
    aliases: ['logo', 'design', 'tool'],
  },
  {
    id: 'lucide-file-archive',
    aliases: ['zip', 'package', 'archive'],
  },
  {
    id: 'lucide-file-audio-2',
    aliases: ['music', 'audio', 'sound', 'headphones'],
  },
  {
    id: 'lucide-file-audio',
    aliases: ['music', 'audio', 'sound', 'headphones'],
  },
  {
    id: 'lucide-file-axis-3d',
    aliases: ['model', '3d', 'axis', 'coordinates'],
  },
  {
    id: 'lucide-file-badge-2',
    aliases: ['award', 'achievement', 'badge'],
  },
  {
    id: 'lucide-file-badge',
    aliases: ['award', 'achievement', 'badge'],
  },
  {
    id: 'lucide-file-bar-chart-2',
    aliases: ['statistics', 'diagram', 'graph', 'presentation'],
  },
  {
    id: 'lucide-file-bar-chart',
    aliases: ['statistics', 'diagram', 'graph', 'presentation'],
  },
  {
    id: 'lucide-file-box',
    aliases: ['box', 'package', 'model'],
  },
  {
    id: 'lucide-file-check-2',
    aliases: ['done', 'document', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-file-check',
    aliases: ['done', 'document', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-file-clock',
    aliases: ['history', 'log', 'clock'],
  },
  {
    id: 'lucide-file-code',
    aliases: ['script', 'document'],
  },
  {
    id: 'lucide-file-cog-2',
    aliases: ['executable', 'settings', 'cog', 'edit', 'gear'],
  },
  {
    id: 'lucide-file-cog',
    aliases: ['executable', 'settings', 'cog', 'edit', 'gear'],
  },
  {
    id: 'lucide-file-diff',
    aliases: ['diff', 'patch'],
  },
  {
    id: 'lucide-file-digit',
    aliases: ['number', 'document'],
  },
  {
    id: 'lucide-file-down',
    aliases: ['download', 'import', 'export'],
  },
  {
    id: 'lucide-file-edit',
    aliases: ['edit', 'signature'],
  },
  {
    id: 'lucide-file-heart',
    aliases: ['heart', 'favourite', 'bookmark', 'quick link'],
  },
  {
    id: 'lucide-file-image',
    aliases: ['image', 'graphics', 'photo', 'picture'],
  },
  {
    id: 'lucide-file-input',
    aliases: ['document'],
  },
  {
    id: 'lucide-file-json-2',
    aliases: ['code', 'json', 'curly braces'],
  },
  {
    id: 'lucide-file-json',
    aliases: ['code', 'json', 'curly braces'],
  },
  {
    id: 'lucide-file-key-2',
    aliases: ['key', 'private', 'public', 'security'],
  },
  {
    id: 'lucide-file-key',
    aliases: ['key', 'private', 'public', 'security'],
  },
  {
    id: 'lucide-file-line-chart',
    aliases: ['statistics', 'diagram', 'graph', 'presentation'],
  },
  {
    id: 'lucide-file-lock-2',
    aliases: ['lock', 'password', 'security'],
  },
  {
    id: 'lucide-file-lock',
    aliases: ['lock', 'password', 'security'],
  },
  {
    id: 'lucide-file-minus-2',
    aliases: ['document'],
  },
  {
    id: 'lucide-file-minus',
    aliases: ['delete', 'remove', 'erase', 'document'],
  },
  {
    id: 'lucide-file-output',
    aliases: ['document'],
  },
  {
    id: 'lucide-file-pie-chart',
    aliases: ['statistics', 'diagram', 'graph', 'presentation'],
  },
  {
    id: 'lucide-file-plus-2',
    aliases: ['add', 'create', 'new', 'document'],
  },
  {
    id: 'lucide-file-plus',
    aliases: ['add', 'create', 'new', 'document'],
  },
  {
    id: 'lucide-file-question',
    aliases: ['readme', 'help', 'question'],
  },
  {
    id: 'lucide-file-scan',
    aliases: ['scan', 'code', 'qr-code'],
  },
  {
    id: 'lucide-file-search-2',
    aliases: ['lost', 'document', 'find', 'browser'],
  },
  {
    id: 'lucide-file-search',
    aliases: ['lost', 'document', 'find', 'browser'],
  },
  {
    id: 'lucide-file-signature',
    aliases: ['edit', 'signature'],
  },
  {
    id: 'lucide-file-spreadsheet',
    aliases: ['spreadsheet', 'sheet', 'table'],
  },
  {
    id: 'lucide-file-symlink',
    aliases: ['symlink', 'symbolic', 'link'],
  },
  {
    id: 'lucide-file-terminal',
    aliases: ['terminal', 'bash', 'script', 'executable'],
  },
  {
    id: 'lucide-file-text',
    aliases: ['data', 'txt', 'pdf', 'document'],
  },
  {
    id: 'lucide-file-type-2',
    aliases: ['font', 'text', 'typography', 'type'],
  },
  {
    id: 'lucide-file-type',
    aliases: ['font', 'text', 'typography', 'type'],
  },
  {
    id: 'lucide-file-up',
    aliases: ['upload', 'import', 'export'],
  },
  {
    id: 'lucide-file-video-2',
    aliases: ['movie', 'video', 'film'],
  },
  {
    id: 'lucide-file-video',
    aliases: ['movie', 'video', 'film'],
  },
  {
    id: 'lucide-file-volume-2',
    aliases: ['audio', 'music', 'volume'],
  },
  {
    id: 'lucide-file-volume',
    aliases: ['audio', 'music', 'volume'],
  },
  {
    id: 'lucide-file-warning',
    aliases: [
      'hidden',
      'warning',
      'alert',
      'danger',
      'protected',
      'exclamation mark',
    ],
  },
  {
    id: 'lucide-file-x-2',
    aliases: ['lost', 'delete', 'remove', 'document'],
  },
  {
    id: 'lucide-file-x',
    aliases: ['lost', 'delete', 'remove', 'document'],
  },
  {
    id: 'lucide-file',
    aliases: ['document'],
  },
  {
    id: 'lucide-files',
    aliases: ['multiple', 'copy', 'documents'],
  },
  {
    id: 'lucide-film',
    aliases: ['movie', 'video'],
  },
  {
    id: 'lucide-filter-x',
    aliases: ['funnel', 'hopper'],
  },
  {
    id: 'lucide-filter',
    aliases: ['funnel', 'hopper'],
  },
  {
    id: 'lucide-fingerprint',
    aliases: ['2fa', 'authentication', 'biometric', 'identity', 'security'],
  },
  {
    id: 'lucide-fish-off',
    aliases: [
      'food',
      'dish',
      'restaurant',
      'course',
      'meal',
      'seafood',
      'animal',
      'pet',
      'sea',
      'marine',
      'allergy',
      'intolerance',
      'diet',
    ],
  },
  {
    id: 'lucide-fish',
    aliases: [
      'food',
      'dish',
      'restaurant',
      'course',
      'meal',
      'seafood',
      'animal',
      'pet',
      'sea',
      'marine',
    ],
  },
  {
    id: 'lucide-flag-off',
    aliases: ['unflag'],
  },
  {
    id: 'lucide-flag-triangle-left',
    aliases: ['report', 'timeline'],
  },
  {
    id: 'lucide-flag-triangle-right',
    aliases: ['report', 'timeline'],
  },
  {
    id: 'lucide-flag',
    aliases: ['report'],
  },
  {
    id: 'lucide-flame',
    aliases: ['fire', 'lit'],
  },
  {
    id: 'lucide-flashlight-off',
    aliases: ['torch'],
  },
  {
    id: 'lucide-flashlight',
    aliases: ['torch'],
  },
  {
    id: 'lucide-flask-conical-off',
    aliases: [
      'beaker',
      'erlenmeyer',
      'non toxic',
      'lab',
      'chemistry',
      'experiment',
      'test',
    ],
  },
  {
    id: 'lucide-flask-conical',
    aliases: ['beaker', 'erlenmeyer', 'lab', 'chemistry', 'experiment', 'test'],
  },
  {
    id: 'lucide-flask-round',
    aliases: ['beaker', 'lab', 'chemistry', 'experiment', 'test'],
  },
  {
    id: 'lucide-flip-horizontal-2',
    aliases: ['reflect', 'mirror', 'alignment'],
  },
  {
    id: 'lucide-flip-horizontal',
    aliases: ['reflect', 'mirror', 'alignment'],
  },
  {
    id: 'lucide-flip-vertical-2',
    aliases: ['reflect', 'mirror', 'alignment'],
  },
  {
    id: 'lucide-flip-vertical',
    aliases: ['reflect', 'mirror', 'alignment'],
  },
  {
    id: 'lucide-flower-2',
    aliases: ['sustainability', 'nature', 'plant'],
  },
  {
    id: 'lucide-flower',
    aliases: ['sustainability', 'nature', 'plant', 'spring'],
  },
  {
    id: 'lucide-focus',
    aliases: ['camera', 'lens', 'photo'],
  },
  {
    id: 'lucide-folder-archive',
    aliases: ['archive', 'zip', 'package'],
  },
  {
    id: 'lucide-folder-check',
    aliases: ['done', 'directory', 'todo', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-folder-clock',
    aliases: ['history', 'directory', 'clock'],
  },
  {
    id: 'lucide-folder-closed',
    aliases: ['directory', 'closed'],
  },
  {
    id: 'lucide-folder-cog-2',
    aliases: [
      'directory',
      'settings',
      'control',
      'preferences',
      'cog',
      'edit',
      'gear',
    ],
  },
  {
    id: 'lucide-folder-cog',
    aliases: [
      'directory',
      'settings',
      'control',
      'preferences',
      'cog',
      'edit',
      'gear',
    ],
  },
  {
    id: 'lucide-folder-down',
    aliases: ['directory', 'download', 'import', 'export'],
  },
  {
    id: 'lucide-folder-edit',
    aliases: ['directory', 'edit', 'rename'],
  },
  {
    id: 'lucide-folder-git-2',
    aliases: ['directory', 'root', 'project', 'git', 'repo'],
  },
  {
    id: 'lucide-folder-git',
    aliases: ['directory', 'root', 'project', 'git', 'repo'],
  },
  {
    id: 'lucide-folder-heart',
    aliases: ['directory', 'heart', 'favourite', 'bookmark', 'quick link'],
  },
  {
    id: 'lucide-folder-input',
    aliases: ['directory', 'import', 'export'],
  },
  {
    id: 'lucide-folder-key',
    aliases: ['directory', 'key', 'private', 'security', 'protected'],
  },
  {
    id: 'lucide-folder-lock',
    aliases: ['directory', 'lock', 'private', 'security', 'protected'],
  },
  {
    id: 'lucide-folder-minus',
    aliases: ['directory', 'remove', 'delete'],
  },
  {
    id: 'lucide-folder-open',
    aliases: ['directory'],
  },
  {
    id: 'lucide-folder-output',
    aliases: ['directory', 'import', 'export'],
  },
  {
    id: 'lucide-folder-plus',
    aliases: ['directory', 'add', 'create', 'new'],
  },
  {
    id: 'lucide-folder-search-2',
    aliases: ['directory', 'search', 'find', 'lost', 'browser'],
  },
  {
    id: 'lucide-folder-search',
    aliases: ['directory', 'search', 'find', 'lost', 'browser'],
  },
  {
    id: 'lucide-folder-symlink',
    aliases: ['directory', 'symlink', 'symbolic', 'link'],
  },
  {
    id: 'lucide-folder-tree',
    aliases: ['directory', 'tree', 'browser'],
  },
  {
    id: 'lucide-folder-up',
    aliases: ['directory', 'upload', 'import', 'export'],
  },
  {
    id: 'lucide-folder-x',
    aliases: ['directory', 'remove', 'delete'],
  },
  {
    id: 'lucide-folder',
    aliases: ['directory'],
  },
  {
    id: 'lucide-folders',
    aliases: ['multiple', 'copy', 'directories'],
  },
  {
    id: 'lucide-footprints',
    aliases: ['steps', 'walking', 'foot', 'feet', 'trail', 'shoe'],
  },
  {
    id: 'lucide-forklift',
    aliases: ['vehicle', 'transport', 'logistics'],
  },
  {
    id: 'lucide-form-input',
    aliases: ['2fa', 'authenticate', 'login', 'field', 'text'],
  },
  {
    id: 'lucide-forward',
    aliases: ['send', 'share', 'email'],
  },
  {
    id: 'lucide-frame',
    aliases: ['logo', 'design', 'tool'],
  },
  {
    id: 'lucide-framer',
    aliases: ['logo', 'design', 'tool'],
  },
  {
    id: 'lucide-frown',
    aliases: ['emoji', 'face', 'bad', 'sad', 'emotion'],
  },
  {
    id: 'lucide-fuel',
    aliases: ['filling-station', 'gas', 'petrol', 'tank'],
  },
  {
    id: 'lucide-function-square',
    aliases: ['programming', 'code', 'automation', 'maths'],
  },
  {
    id: 'lucide-gamepad-2',
    aliases: ['console'],
  },
  {
    id: 'lucide-gamepad',
    aliases: ['console'],
  },
  {
    id: 'lucide-gauge',
    aliases: ['dashboard'],
  },
  {
    id: 'lucide-gavel',
    aliases: ['hammer', 'mallet'],
  },
  {
    id: 'lucide-gem',
    aliases: ['diamond', 'price', 'special', 'present'],
  },
  {
    id: 'lucide-ghost',
    aliases: ['pac-man', 'spooky'],
  },
  {
    id: 'lucide-gift',
    aliases: ['present', 'box', 'birthday', 'party'],
  },
  {
    id: 'lucide-git-branch-plus',
    aliases: ['add', 'create'],
  },
  {
    id: 'lucide-git-branch',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-git-commit',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-git-compare',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-git-fork',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-git-merge',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-git-pull-request-closed',
    aliases: ['code', 'version control', 'rejected'],
  },
  {
    id: 'lucide-git-pull-request-draft',
    aliases: ['code', 'version control', 'draft'],
  },
  {
    id: 'lucide-git-pull-request',
    aliases: ['code', 'version control'],
  },
  {
    id: 'lucide-github',
    aliases: ['logo', 'version control'],
  },
  {
    id: 'lucide-gitlab',
    aliases: ['logo', 'version control'],
  },
  {
    id: 'lucide-glass-water',
    aliases: ['beverage', 'drink', 'glass', 'water'],
  },
  {
    id: 'lucide-glasses',
    aliases: ['glasses', 'spectacles'],
  },
  {
    id: 'lucide-globe-2',
    aliases: ['world', 'browser', 'language', 'translate'],
  },
  {
    id: 'lucide-globe',
    aliases: ['world', 'browser', 'language', 'translate'],
  },
  {
    id: 'lucide-grab',
    aliases: ['hand'],
  },
  {
    id: 'lucide-graduation-cap',
    aliases: ['school', 'university', 'learn', 'study'],
  },
  {
    id: 'lucide-grape',
    aliases: ['fruit', 'wine', 'food'],
  },
  {
    id: 'lucide-grid',
    aliases: ['table'],
  },
  {
    id: 'lucide-grip-horizontal',
    aliases: ['grab', 'dots', 'handle', 'move', 'drag'],
  },
  {
    id: 'lucide-grip-vertical',
    aliases: ['grab', 'dots', 'handle', 'move', 'drag'],
  },
  {
    id: 'lucide-grip',
    aliases: ['grab', 'dots', 'handle', 'move', 'drag'],
  },
  {
    id: 'lucide-hammer',
    aliases: ['mallet'],
  },
  {
    id: 'lucide-hand-metal',
    aliases: ['rock'],
  },
  {
    id: 'lucide-hand',
    aliases: ['wave', 'move', 'mouse', 'grab'],
  },
  {
    id: 'lucide-hard-drive',
    aliases: [
      'computer',
      'server',
      'memory',
      'data',
      'ssd',
      'disk',
      'hard disk',
    ],
  },
  {
    id: 'lucide-hard-hat',
    aliases: ['helmet', 'construction', 'safety', 'savety'],
  },
  {
    id: 'lucide-hash',
    aliases: ['hashtag', 'number', 'pound'],
  },
  {
    id: 'lucide-haze',
    aliases: ['mist', 'fog'],
  },
  {
    id: 'lucide-heading-1',
    aliases: [],
  },
  {
    id: 'lucide-heading-2',
    aliases: [],
  },
  {
    id: 'lucide-heading-3',
    aliases: [],
  },
  {
    id: 'lucide-heading-4',
    aliases: [],
  },
  {
    id: 'lucide-heading-5',
    aliases: [],
  },
  {
    id: 'lucide-heading-6',
    aliases: [],
  },
  {
    id: 'lucide-heading',
    aliases: [],
  },
  {
    id: 'lucide-headphones',
    aliases: ['music', 'audio', 'sound'],
  },
  {
    id: 'lucide-heart-crack',
    aliases: ['heartbreak', 'sadness', 'emotion'],
  },
  {
    id: 'lucide-heart-handshake',
    aliases: [
      'agreement',
      'charity',
      'help',
      'deal',
      'terms',
      'emotion',
      'together',
      'handshake',
    ],
  },
  {
    id: 'lucide-heart-off',
    aliases: ['unlike', 'dislike', 'hate', 'emotion'],
  },
  {
    id: 'lucide-heart-pulse',
    aliases: [
      'heartbeat',
      'pulse',
      'health',
      'medical',
      'blood pressure',
      'cardiac',
      'systole',
      'diastole',
    ],
  },
  {
    id: 'lucide-heart',
    aliases: ['like', 'love', 'emotion'],
  },
  {
    id: 'lucide-help-circle',
    aliases: ['question mark'],
  },
  {
    id: 'lucide-helping-hand',
    aliases: ['agreement', 'help', 'proposal', 'charity', 'begging', 'terms'],
  },
  {
    id: 'lucide-hexagon',
    aliases: ['shape', 'node.js', 'logo'],
  },
  {
    id: 'lucide-highlighter',
    aliases: ['mark', 'text'],
  },
  {
    id: 'lucide-history',
    aliases: [
      'time',
      'redo',
      'undo',
      'rewind',
      'timeline',
      'version',
      'time machine',
      'backup',
    ],
  },
  {
    id: 'lucide-home',
    aliases: ['house', 'living'],
  },
  {
    id: 'lucide-hop-off',
    aliases: [
      'beer',
      'brewery',
      'drink',
      'hop free',
      'allergy',
      'intolerance',
      'diet',
    ],
  },
  {
    id: 'lucide-hop',
    aliases: ['beer', 'brewery', 'drink'],
  },
  {
    id: 'lucide-hotel',
    aliases: ['building', 'hostel', 'motel', 'inn'],
  },
  {
    id: 'lucide-hourglass',
    aliases: ['timer', 'time', 'sandglass'],
  },
  {
    id: 'lucide-ice-cream-2',
    aliases: [
      'gelato',
      'food',
      'dessert',
      'dish',
      'restaurant',
      'course',
      'meal',
    ],
  },
  {
    id: 'lucide-ice-cream',
    aliases: ['gelato', 'food'],
  },
  {
    id: 'lucide-image-minus',
    aliases: ['remove', 'delete'],
  },
  {
    id: 'lucide-image-off',
    aliases: ['picture', 'photo'],
  },
  {
    id: 'lucide-image-plus',
    aliases: ['add', 'create'],
  },
  {
    id: 'lucide-image',
    aliases: ['picture', 'photo'],
  },
  {
    id: 'lucide-import',
    aliases: ['save'],
  },
  {
    id: 'lucide-inbox',
    aliases: ['email'],
  },
  {
    id: 'lucide-indent',
    aliases: ['text', 'tab'],
  },
  {
    id: 'lucide-indian-rupee',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-infinity',
    aliases: ['unlimited', 'forever', 'loop', 'maths'],
  },
  {
    id: 'lucide-info',
    aliases: ['help'],
  },
  {
    id: 'lucide-inspect',
    aliases: ['element', 'mouse', 'click', 'cursor', 'pointer', 'box'],
  },
  {
    id: 'lucide-instagram',
    aliases: ['logo', 'camera', 'social'],
  },
  {
    id: 'lucide-italic',
    aliases: ['oblique', 'text', 'format'],
  },
  {
    id: 'lucide-japanese-yen',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-joystick',
    aliases: ['game', 'console', 'control stick'],
  },
  {
    id: 'lucide-key',
    aliases: ['password', 'login', 'authentication', 'secure'],
  },
  {
    id: 'lucide-keyboard',
    aliases: ['layout', 'spell', 'settings', 'mouse'],
  },
  {
    id: 'lucide-lamp-ceiling',
    aliases: ['lighting', 'household', 'home', 'furniture'],
  },
  {
    id: 'lucide-lamp-desk',
    aliases: ['lighting', 'household', 'office', 'desk', 'home', 'furniture'],
  },
  {
    id: 'lucide-lamp-floor',
    aliases: ['lighting', 'household', 'floor', 'home', 'furniture'],
  },
  {
    id: 'lucide-lamp-wall-down',
    aliases: ['lighting', 'household', 'wall', 'home', 'furniture'],
  },
  {
    id: 'lucide-lamp-wall-up',
    aliases: ['lighting', 'household', 'wall', 'home', 'furniture'],
  },
  {
    id: 'lucide-lamp',
    aliases: ['lighting', 'household', 'home', 'furniture'],
  },
  {
    id: 'lucide-landmark',
    aliases: ['bank', 'building', 'capitol', 'finance', 'money'],
  },
  {
    id: 'lucide-languages',
    aliases: ['translate'],
  },
  {
    id: 'lucide-laptop-2',
    aliases: ['computer'],
  },
  {
    id: 'lucide-laptop',
    aliases: ['computer'],
  },
  {
    id: 'lucide-lasso-select',
    aliases: ['select', 'cursor'],
  },
  {
    id: 'lucide-lasso',
    aliases: ['select', 'cursor'],
  },
  {
    id: 'lucide-laugh',
    aliases: ['emoji', 'face', 'happy', 'good', 'emotion'],
  },
  {
    id: 'lucide-layers',
    aliases: ['stack', 'pages'],
  },
  {
    id: 'lucide-layout-dashboard',
    aliases: ['masonry', 'brick'],
  },
  {
    id: 'lucide-layout-grid',
    aliases: ['app', 'home', 'start'],
  },
  {
    id: 'lucide-layout-list',
    aliases: ['image', 'photo', 'item'],
  },
  {
    id: 'lucide-layout-template',
    aliases: ['window', 'webpage', 'block', 'section'],
  },
  {
    id: 'lucide-layout',
    aliases: ['window', 'webpage'],
  },
  {
    id: 'lucide-leaf',
    aliases: ['sustainability', 'nature', 'energy', 'plant', 'autumn'],
  },
  {
    id: 'lucide-library',
    aliases: ['book', 'music', 'album'],
  },
  {
    id: 'lucide-life-buoy',
    aliases: ['help', 'rescue', 'ship'],
  },
  {
    id: 'lucide-lightbulb-off',
    aliases: ['lights'],
  },
  {
    id: 'lucide-lightbulb',
    aliases: ['idea', 'bright', 'lights'],
  },
  {
    id: 'lucide-line-chart',
    aliases: ['statistics', 'diagram', 'graph'],
  },
  {
    id: 'lucide-link-2-off',
    aliases: ['unchain', 'chain'],
  },
  {
    id: 'lucide-link-2',
    aliases: ['chain', 'url'],
  },
  {
    id: 'lucide-link',
    aliases: ['chain', 'url'],
  },
  {
    id: 'lucide-linkedin',
    aliases: ['logo', 'social media', 'social'],
  },
  {
    id: 'lucide-list-checks',
    aliases: ['todo', 'done', 'tick', 'complete', 'task'],
  },
  {
    id: 'lucide-list-end',
    aliases: ['queue', 'bottom', 'end', 'playlist'],
  },
  {
    id: 'lucide-list-minus',
    aliases: ['playlist', 'remove', 'song', 'subtract', 'delete', 'unqueue'],
  },
  {
    id: 'lucide-list-music',
    aliases: ['playlist', 'queue', 'music', 'audio', 'playback'],
  },
  {
    id: 'lucide-list-ordered',
    aliases: ['number', 'order', 'queue'],
  },
  {
    id: 'lucide-list-plus',
    aliases: ['playlist', 'add', 'song', 'track', 'new'],
  },
  {
    id: 'lucide-list-start',
    aliases: ['queue', 'top', 'start', 'next', 'playlist'],
  },
  {
    id: 'lucide-list-tree',
    aliases: ['tree', 'browser'],
  },
  {
    id: 'lucide-list-video',
    aliases: ['playlist', 'video', 'playback'],
  },
  {
    id: 'lucide-list-x',
    aliases: ['playlist', 'subtract', 'remove', 'delete', 'unqueue'],
  },
  {
    id: 'lucide-list',
    aliases: ['options'],
  },
  {
    id: 'lucide-loader-2',
    aliases: ['load'],
  },
  {
    id: 'lucide-loader',
    aliases: ['load', 'wait'],
  },
  {
    id: 'lucide-locate-fixed',
    aliases: ['map', 'gps', 'location', 'cross'],
  },
  {
    id: 'lucide-locate-off',
    aliases: ['map', 'gps', 'location', 'cross'],
  },
  {
    id: 'lucide-locate',
    aliases: ['map', 'gps', 'location', 'cross'],
  },
  {
    id: 'lucide-lock',
    aliases: ['security', 'password', 'secure', 'admin'],
  },
  {
    id: 'lucide-log-in',
    aliases: ['sign in', 'arrow', 'enter', 'auth'],
  },
  {
    id: 'lucide-log-out',
    aliases: ['sign out', 'arrow', 'exit', 'auth'],
  },
  {
    id: 'lucide-luggage',
    aliases: ['baggage', 'luggage', 'travel', 'suitcase'],
  },
  {
    id: 'lucide-magnet',
    aliases: ['horseshoe', 'lock', 'science', 'snap'],
  },
  {
    id: 'lucide-mail-check',
    aliases: [
      'email',
      'message',
      'letter',
      'subscribe',
      'delivered',
      'success',
      'read',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-mail-minus',
    aliases: ['email', 'message', 'letter', 'remove', 'delete'],
  },
  {
    id: 'lucide-mail-open',
    aliases: ['email', 'message', 'letter', 'read'],
  },
  {
    id: 'lucide-mail-plus',
    aliases: ['email', 'message', 'letter', 'add', 'create', 'new', 'compose'],
  },
  {
    id: 'lucide-mail-question',
    aliases: ['email', 'message', 'letter', 'delivery', 'undelivered'],
  },
  {
    id: 'lucide-mail-search',
    aliases: ['email', 'message', 'letter', 'search'],
  },
  {
    id: 'lucide-mail-warning',
    aliases: [
      'email',
      'message',
      'letter',
      'delivery error',
      'exclamation mark',
    ],
  },
  {
    id: 'lucide-mail-x',
    aliases: ['email', 'message', 'letter', 'remove', 'delete'],
  },
  {
    id: 'lucide-mail',
    aliases: ['email', 'message', 'letter', 'unread'],
  },
  {
    id: 'lucide-mailbox',
    aliases: ['emails', 'messages', 'letters', 'mailing list', 'newsletter'],
  },
  {
    id: 'lucide-mails',
    aliases: [
      'emails',
      'messages',
      'letters',
      'multiple',
      'mailing list',
      'newsletter',
      'copy',
    ],
  },
  {
    id: 'lucide-map-pin-off',
    aliases: ['location', 'navigation', 'travel', 'marker'],
  },
  {
    id: 'lucide-map-pin',
    aliases: ['location', 'navigation', 'travel', 'marker'],
  },
  {
    id: 'lucide-map',
    aliases: ['location', 'navigation', 'travel'],
  },
  {
    id: 'lucide-martini',
    aliases: ['cocktail', 'alcohol', 'beverage', 'bar', 'drink', 'glass'],
  },
  {
    id: 'lucide-maximize-2',
    aliases: ['fullscreen', 'arrows', 'expand'],
  },
  {
    id: 'lucide-maximize',
    aliases: ['fullscreen', 'expand'],
  },
  {
    id: 'lucide-medal',
    aliases: ['prize', 'sports', 'winner', 'trophy', 'award', 'achievement'],
  },
  {
    id: 'lucide-megaphone-off',
    aliases: [
      'advertisement',
      'attention',
      'alert',
      'notification',
      'disable',
      'silent',
    ],
  },
  {
    id: 'lucide-megaphone',
    aliases: ['advertisement', 'attention', 'alert', 'notification'],
  },
  {
    id: 'lucide-meh',
    aliases: ['emoji', 'face', 'neutral', 'emotion'],
  },
  {
    id: 'lucide-menu',
    aliases: ['bars', 'navigation', 'hamburger', 'options'],
  },
  {
    id: 'lucide-message-circle',
    aliases: ['comment', 'chat', 'conversation'],
  },
  {
    id: 'lucide-message-square-dashed',
    aliases: ['comment', 'chat', 'conversation', 'draft'],
  },
  {
    id: 'lucide-message-square-plus',
    aliases: ['comment', 'chat', 'conversation', 'add', 'feedback'],
  },
  {
    id: 'lucide-message-square',
    aliases: ['comment', 'chat', 'conversation'],
  },
  {
    id: 'lucide-messages-square',
    aliases: ['comment', 'chat', 'conversation', 'copy', 'multiple'],
  },
  {
    id: 'lucide-mic-2',
    aliases: [
      'lyrics',
      'voice',
      'listen',
      'sound',
      'music',
      'radio',
      'podcast',
      'karaoke',
      'singing',
      'microphone',
    ],
  },
  {
    id: 'lucide-mic-off',
    aliases: ['record', 'sound', 'mute', 'microphone'],
  },
  {
    id: 'lucide-mic',
    aliases: ['record', 'sound', 'listen', 'radio', 'podcast', 'microphone'],
  },
  {
    id: 'lucide-microscope',
    aliases: ['medical', 'education', 'science', 'imaging', 'research'],
  },
  {
    id: 'lucide-microwave',
    aliases: ['oven', 'cooker', 'toaster oven', 'bake'],
  },
  {
    id: 'lucide-milestone',
    aliases: ['sign', 'signpost', 'version control'],
  },
  {
    id: 'lucide-milk-off',
    aliases: [
      'lactose free',
      'bottle',
      'beverage',
      'drink',
      'water',
      'allergy',
      'intolerance',
      'diet',
    ],
  },
  {
    id: 'lucide-milk',
    aliases: ['lactose', 'bottle', 'beverage', 'drink', 'water', 'diet'],
  },
  {
    id: 'lucide-minimize-2',
    aliases: ['exit fullscreen', 'arrows', 'close', 'shrink'],
  },
  {
    id: 'lucide-minimize',
    aliases: ['exit fullscreen', 'close', 'shrink'],
  },
  {
    id: 'lucide-minus-circle',
    aliases: ['subtract', 'calculate', 'maths'],
  },
  {
    id: 'lucide-minus-square',
    aliases: ['subtract', 'calculate', 'maths'],
  },
  {
    id: 'lucide-minus',
    aliases: [
      'subtract',
      'calculate',
      'maths',
      'line',
      'divide',
      'horizontal rule',
      'hr',
    ],
  },
  {
    id: 'lucide-monitor-off',
    aliases: ['share'],
  },
  {
    id: 'lucide-monitor-smartphone',
    aliases: [
      'smartphone',
      'phone',
      'cellphone',
      'device',
      'mobile',
      'desktop',
      'monitor',
      'responsive',
    ],
  },
  {
    id: 'lucide-monitor-speaker',
    aliases: ['devices', 'connect', 'cast'],
  },
  {
    id: 'lucide-monitor',
    aliases: ['tv', 'screen', 'display'],
  },
  {
    id: 'lucide-moon',
    aliases: ['dark', 'night'],
  },
  {
    id: 'lucide-more-horizontal',
    aliases: ['ellipsis', 'menu', 'options'],
  },
  {
    id: 'lucide-more-vertical',
    aliases: ['ellipsis', 'menu', 'options'],
  },
  {
    id: 'lucide-mountain-snow',
    aliases: ['alpine', 'climb', 'snow'],
  },
  {
    id: 'lucide-mountain',
    aliases: ['climb', 'hike', 'rock'],
  },
  {
    id: 'lucide-mouse-pointer-2',
    aliases: ['arrow', 'cursor', 'click'],
  },
  {
    id: 'lucide-mouse-pointer-click',
    aliases: ['arrow', 'cursor', 'click'],
  },
  {
    id: 'lucide-mouse-pointer',
    aliases: ['arrow', 'cursor', 'click'],
  },
  {
    id: 'lucide-mouse',
    aliases: ['device', 'scroll', 'click'],
  },
  {
    id: 'lucide-move-3d',
    aliases: [
      'arrows',
      'axis',
      'gizmo',
      'coordinates',
      'transform',
      'translate',
    ],
  },
  {
    id: 'lucide-move-diagonal-2',
    aliases: ['double', 'arrow'],
  },
  {
    id: 'lucide-move-diagonal',
    aliases: ['double', 'arrow'],
  },
  {
    id: 'lucide-move-horizontal',
    aliases: ['double', 'arrow'],
  },
  {
    id: 'lucide-move-vertical',
    aliases: ['double', 'arrow'],
  },
  {
    id: 'lucide-move',
    aliases: ['arrows'],
  },
  {
    id: 'lucide-music-2',
    aliases: ['quaver', 'eighth note', 'note'],
  },
  {
    id: 'lucide-music-3',
    aliases: ['crotchet', 'minim', 'quarter note', 'half note', 'note'],
  },
  {
    id: 'lucide-music-4',
    aliases: ['semiquaver', 'sixteenth note', 'note'],
  },
  {
    id: 'lucide-music',
    aliases: ['note', 'quaver', 'eighth note'],
  },
  {
    id: 'lucide-navigation-2-off',
    aliases: ['location', 'travel'],
  },
  {
    id: 'lucide-navigation-2',
    aliases: ['location', 'travel'],
  },
  {
    id: 'lucide-navigation-off',
    aliases: ['location', 'travel'],
  },
  {
    id: 'lucide-navigation',
    aliases: ['location', 'travel'],
  },
  {
    id: 'lucide-network',
    aliases: ['tree'],
  },
  {
    id: 'lucide-newspaper',
    aliases: ['news', 'feed', 'home', 'magazine', 'article', 'headline'],
  },
  {
    id: 'lucide-nfc',
    aliases: ['contactless', 'payment', 'near-field communication'],
  },
  {
    id: 'lucide-nut-off',
    aliases: ['hazelnut', 'acorn', 'food', 'allergy', 'intolerance', 'diet'],
  },
  {
    id: 'lucide-nut',
    aliases: ['hazelnut', 'acorn', 'food', 'diet'],
  },
  {
    id: 'lucide-octagon',
    aliases: ['stop', 'shape'],
  },
  {
    id: 'lucide-option',
    aliases: ['key', 'mac', 'button'],
  },
  {
    id: 'lucide-orbit',
    aliases: ['planet', 'space', 'physics'],
  },
  {
    id: 'lucide-outdent',
    aliases: ['text', 'tab'],
  },
  {
    id: 'lucide-package-2',
    aliases: ['box', 'container', 'archive', 'zip'],
  },
  {
    id: 'lucide-package-check',
    aliases: [
      'confirm',
      'verified',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-package-minus',
    aliases: ['delete', 'remove'],
  },
  {
    id: 'lucide-package-open',
    aliases: ['box', 'container', 'unpack', 'open'],
  },
  {
    id: 'lucide-package-plus',
    aliases: ['new', 'add', 'create'],
  },
  {
    id: 'lucide-package-search',
    aliases: ['find', 'product process'],
  },
  {
    id: 'lucide-package-x',
    aliases: ['delete', 'remove'],
  },
  {
    id: 'lucide-package',
    aliases: ['box', 'container'],
  },
  {
    id: 'lucide-paint-bucket',
    aliases: ['fill', 'paint', 'bucket', 'design'],
  },
  {
    id: 'lucide-paintbrush-2',
    aliases: ['brush', 'paintbrush', 'design', 'color'],
  },
  {
    id: 'lucide-paintbrush',
    aliases: ['brush', 'paintbrush', 'design', 'color'],
  },
  {
    id: 'lucide-palette',
    aliases: ['color', 'theme'],
  },
  {
    id: 'lucide-palmtree',
    aliases: ['vacation', 'leisure', 'island'],
  },
  {
    id: 'lucide-paperclip',
    aliases: ['attachment', 'file'],
  },
  {
    id: 'lucide-parking-circle-off',
    aliases: ['parking lot', 'car park', 'no parking'],
  },
  {
    id: 'lucide-parking-circle',
    aliases: ['parking lot', 'car park'],
  },
  {
    id: 'lucide-parking-square-off',
    aliases: ['parking lot', 'car park', 'no parking'],
  },
  {
    id: 'lucide-parking-square',
    aliases: ['parking lot', 'car park'],
  },
  {
    id: 'lucide-party-popper',
    aliases: ['emoji', 'congratulations', 'celebration', 'party'],
  },
  {
    id: 'lucide-pause-circle',
    aliases: ['music', 'audio', 'stop'],
  },
  {
    id: 'lucide-pause-octagon',
    aliases: ['music', 'audio', 'stop'],
  },
  {
    id: 'lucide-pause',
    aliases: ['music', 'stop'],
  },
  {
    id: 'lucide-pen-tool',
    aliases: ['vector', 'drawing', 'path'],
  },
  {
    id: 'lucide-pencil',
    aliases: ['edit', 'pen', 'create'],
  },
  {
    id: 'lucide-percent',
    aliases: ['discount'],
  },
  {
    id: 'lucide-person-standing',
    aliases: ['people', 'human', 'accessibility', 'stick figure'],
  },
  {
    id: 'lucide-phone-call',
    aliases: ['ring'],
  },
  {
    id: 'lucide-phone-forwarded',
    aliases: ['call'],
  },
  {
    id: 'lucide-phone-incoming',
    aliases: ['call'],
  },
  {
    id: 'lucide-phone-missed',
    aliases: ['call'],
  },
  {
    id: 'lucide-phone-off',
    aliases: ['call', 'mute'],
  },
  {
    id: 'lucide-phone-outgoing',
    aliases: ['call'],
  },
  {
    id: 'lucide-phone',
    aliases: ['call'],
  },
  {
    id: 'lucide-picture-in-picture-2',
    aliases: [
      'display',
      'play',
      'video',
      'pop out',
      'always on top',
      'window',
      'inset',
      'multitask',
    ],
  },
  {
    id: 'lucide-picture-in-picture',
    aliases: [
      'display',
      'play',
      'video',
      'pop out',
      'always on top',
      'window',
      'inset',
      'multitask',
    ],
  },
  {
    id: 'lucide-pie-chart',
    aliases: ['statistics', 'diagram', 'presentation'],
  },
  {
    id: 'lucide-piggy-bank',
    aliases: ['money', 'savings'],
  },
  {
    id: 'lucide-pilcrow',
    aliases: [
      'paragraph',
      'mark',
      'paraph',
      'blind',
      'typography',
      'type',
      'text',
    ],
  },
  {
    id: 'lucide-pill',
    aliases: [
      'medicine',
      'medication',
      'drug',
      'prescription',
      'tablet',
      'pharmacy',
    ],
  },
  {
    id: 'lucide-pin-off',
    aliases: ['unpin', 'map', 'unlock', 'unfix', 'unsave', 'remove'],
  },
  {
    id: 'lucide-pin',
    aliases: ['save', 'map', 'lock', 'fix'],
  },
  {
    id: 'lucide-pipette',
    aliases: ['eye dropper', 'color picker', 'lab', 'chemistry'],
  },
  {
    id: 'lucide-pizza',
    aliases: ['pie', 'quiche', 'food'],
  },
  {
    id: 'lucide-plane-landing',
    aliases: ['arrival', 'plane', 'trip', 'airplane', 'landing'],
  },
  {
    id: 'lucide-plane-takeoff',
    aliases: ['departure', 'plane', 'trip', 'airplane', 'takeoff'],
  },
  {
    id: 'lucide-plane',
    aliases: ['plane', 'trip', 'airplane'],
  },
  {
    id: 'lucide-play-circle',
    aliases: ['music', 'start', 'run'],
  },
  {
    id: 'lucide-play',
    aliases: ['music', 'start', 'run'],
  },
  {
    id: 'lucide-plug-2',
    aliases: ['electricity', 'socket', 'outlet'],
  },
  {
    id: 'lucide-plug-zap',
    aliases: ['charge', 'charging', 'battery', 'connect'],
  },
  {
    id: 'lucide-plug',
    aliases: ['electricity', 'socket', 'outlet'],
  },
  {
    id: 'lucide-plus-circle',
    aliases: ['add', 'new', 'maths'],
  },
  {
    id: 'lucide-plus-square',
    aliases: ['add', 'new', 'maths'],
  },
  {
    id: 'lucide-plus',
    aliases: ['add', 'new', 'maths'],
  },
  {
    id: 'lucide-pocket',
    aliases: ['logo', 'save'],
  },
  {
    id: 'lucide-podcast',
    aliases: ['mic', 'music'],
  },
  {
    id: 'lucide-pointer',
    aliases: ['mouse'],
  },
  {
    id: 'lucide-pound-sterling',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-power-off',
    aliases: ['on', 'off', 'device', 'switch'],
  },
  {
    id: 'lucide-power',
    aliases: ['on', 'off', 'device', 'switch', 'reboot', 'restart'],
  },
  {
    id: 'lucide-printer',
    aliases: ['fax', 'office', 'device'],
  },
  {
    id: 'lucide-puzzle',
    aliases: ['component', 'module', 'part', 'piece'],
  },
  {
    id: 'lucide-qr-code',
    aliases: ['barcode'],
  },
  {
    id: 'lucide-quote',
    aliases: ['quotation'],
  },
  {
    id: 'lucide-radio-receiver',
    aliases: ['device', 'music', 'connect'],
  },
  {
    id: 'lucide-radio-tower',
    aliases: ['signal', 'broadcast', 'connectivity', 'live', 'frequency'],
  },
  {
    id: 'lucide-radio',
    aliases: ['signal', 'broadcast', 'connectivity', 'live', 'frequency'],
  },
  {
    id: 'lucide-rat',
    aliases: ['animal', 'mouse', 'mice', 'rodent', 'pet', 'pest', 'plague'],
  },
  {
    id: 'lucide-receipt',
    aliases: ['bill', 'voucher', 'slip', 'check', 'counterfoil'],
  },
  {
    id: 'lucide-rectangle-horizontal',
    aliases: ['rectangle', 'aspect ratio', '16:9', 'horizontal', 'shape'],
  },
  {
    id: 'lucide-rectangle-vertical',
    aliases: ['rectangle', 'aspect ratio', '9:16', 'vertical', 'shape'],
  },
  {
    id: 'lucide-recycle',
    aliases: ['sustainability', 'salvage', 'arrows'],
  },
  {
    id: 'lucide-redo-2',
    aliases: ['undo', 'rerun', 'history'],
  },
  {
    id: 'lucide-redo',
    aliases: ['undo', 'rerun', 'history'],
  },
  {
    id: 'lucide-refresh-ccw',
    aliases: [
      'arrows',
      'rotate',
      'reload',
      'rerun',
      'synchronise',
      'synchronize',
      'circular',
      'cycle',
    ],
  },
  {
    id: 'lucide-refresh-cw',
    aliases: [
      'rotate',
      'reload',
      'rerun',
      'synchronise',
      'synchronize',
      'arrows',
      'circular',
      'cycle',
    ],
  },
  {
    id: 'lucide-refrigerator',
    aliases: [
      'frigerator',
      'fridge',
      'freezer',
      'cooler',
      'icebox',
      'chiller',
      'cold storage',
    ],
  },
  {
    id: 'lucide-regex',
    aliases: ['search', 'text', 'code'],
  },
  {
    id: 'lucide-remove-formatting',
    aliases: [
      'text',
      'font',
      'typography',
      'format',
      'x',
      'remove',
      'delete',
      'times',
      'clear',
    ],
  },
  {
    id: 'lucide-repeat-1',
    aliases: ['replay'],
  },
  {
    id: 'lucide-repeat',
    aliases: ['loop', 'arrows'],
  },
  {
    id: 'lucide-replace-all',
    aliases: ['search', 'substitute', 'swap', 'change'],
  },
  {
    id: 'lucide-replace',
    aliases: ['search', 'substitute', 'swap', 'change'],
  },
  {
    id: 'lucide-reply-all',
    aliases: ['email'],
  },
  {
    id: 'lucide-reply',
    aliases: ['email'],
  },
  {
    id: 'lucide-rewind',
    aliases: ['music'],
  },
  {
    id: 'lucide-rocket',
    aliases: ['release', 'boost', 'launch', 'space', 'version'],
  },
  {
    id: 'lucide-rocking-chair',
    aliases: ['chair', 'furniture', 'seat'],
  },
  {
    id: 'lucide-rotate-3d',
    aliases: ['gizmo', 'transform', 'orientation', 'orbit'],
  },
  {
    id: 'lucide-rotate-ccw',
    aliases: [
      'arrow',
      'left',
      'counter-clockwise',
      'restart',
      'reload',
      'rerun',
      'refresh',
      'backup',
      'undo',
    ],
  },
  {
    id: 'lucide-rotate-cw',
    aliases: [
      'arrow',
      'right',
      'clockwise',
      'refresh',
      'reload',
      'rerun',
      'redo',
    ],
  },
  {
    id: 'lucide-router',
    aliases: ['computer', 'server', 'cloud'],
  },
  {
    id: 'lucide-rss',
    aliases: ['feed', 'subscribe'],
  },
  {
    id: 'lucide-ruler',
    aliases: ['measure', 'meter', 'foot', 'inch'],
  },
  {
    id: 'lucide-russian-ruble',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-sailboat',
    aliases: ['ship', 'boat', 'harbor', 'harbour', 'dock'],
  },
  {
    id: 'lucide-salad',
    aliases: [
      'food',
      'vegetarian',
      'dish',
      'restaurant',
      'course',
      'meal',
      'side',
      'vegetables',
      'health',
    ],
  },
  {
    id: 'lucide-sandwich',
    aliases: ['food', 'snack', 'dish', 'restaurant', 'lunch', 'meal'],
  },
  {
    id: 'lucide-save',
    aliases: ['floppy disk'],
  },
  {
    id: 'lucide-scale-3d',
    aliases: ['gizmo', 'transform', 'size'],
  },
  {
    id: 'lucide-scale',
    aliases: ['balance', 'legal', 'license', 'right', 'rule', 'law'],
  },
  {
    id: 'lucide-scaling',
    aliases: ['scale', 'resize', 'design'],
  },
  {
    id: 'lucide-scan-face',
    aliases: ['face', 'biometric', 'authentication', '2fa'],
  },
  {
    id: 'lucide-scan-line',
    aliases: ['qr-code'],
  },
  {
    id: 'lucide-scan',
    aliases: ['qr-code'],
  },
  {
    id: 'lucide-school-2',
    aliases: ['building', 'education', 'childhood', 'university'],
  },
  {
    id: 'lucide-school',
    aliases: ['building', 'education', 'childhood', 'university'],
  },
  {
    id: 'lucide-scissors',
    aliases: ['cut'],
  },
  {
    id: 'lucide-screen-share-off',
    aliases: ['desktop', 'disconnect'],
  },
  {
    id: 'lucide-screen-share',
    aliases: ['host', 'desktop'],
  },
  {
    id: 'lucide-scroll',
    aliases: ['paper', 'log', 'scripture', 'document', 'parchment'],
  },
  {
    id: 'lucide-search',
    aliases: ['find', 'magnifier', 'magnifying glass'],
  },
  {
    id: 'lucide-send',
    aliases: [
      'email',
      'message',
      'mail',
      'paper airplane',
      'paper aeroplane',
      'submit',
    ],
  },
  {
    id: 'lucide-separator-horizontal',
    aliases: ['move', 'split'],
  },
  {
    id: 'lucide-separator-vertical',
    aliases: ['move', 'split'],
  },
  {
    id: 'lucide-server-cog',
    aliases: ['cloud', 'storage', 'computing', 'cog', 'gear'],
  },
  {
    id: 'lucide-server-crash',
    aliases: ['cloud', 'storage', 'problem', 'error'],
  },
  {
    id: 'lucide-server-off',
    aliases: ['cloud', 'storage'],
  },
  {
    id: 'lucide-server',
    aliases: ['cloud', 'storage'],
  },
  {
    id: 'lucide-settings-2',
    aliases: ['cog', 'edit', 'gear', 'preferences'],
  },
  {
    id: 'lucide-settings',
    aliases: ['cog', 'edit', 'gear', 'preferences'],
  },
  {
    id: 'lucide-share-2',
    aliases: ['network', 'connections'],
  },
  {
    id: 'lucide-share',
    aliases: ['network', 'connections'],
  },
  {
    id: 'lucide-sheet',
    aliases: ['spreadsheets', 'table', 'excel'],
  },
  {
    id: 'lucide-shield-alert',
    aliases: ['security', 'secure', 'virus', 'admin', 'safety', 'savety'],
  },
  {
    id: 'lucide-shield-check',
    aliases: [
      'security',
      'secure',
      'done',
      'save',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-shield-close',
    aliases: ['security', 'secure', 'wrong', 'unsave', 'virus'],
  },
  {
    id: 'lucide-shield-off',
    aliases: ['security', 'secure', 'insecure'],
  },
  {
    id: 'lucide-shield-question',
    aliases: ['security', 'secure', 'insecure'],
  },
  {
    id: 'lucide-shield',
    aliases: ['security', 'secure'],
  },
  {
    id: 'lucide-ship',
    aliases: ['boat', 'trip', 'maritime', 'navy'],
  },
  {
    id: 'lucide-shirt',
    aliases: ['t-shirt', 'shopping', 'store', 'clothing', 'clothes'],
  },
  {
    id: 'lucide-shopping-bag',
    aliases: ['ecommerce', 'cart', 'purchase', 'store'],
  },
  {
    id: 'lucide-shopping-cart',
    aliases: ['ecommerce', 'cart', 'purchase', 'store'],
  },
  {
    id: 'lucide-shovel',
    aliases: ['dig', 'spade', 'treasure'],
  },
  {
    id: 'lucide-shower-head',
    aliases: ['shower', 'bath', 'bathroom', 'amenities', 'services'],
  },
  {
    id: 'lucide-shrink',
    aliases: ['scale', 'fullscreen'],
  },
  {
    id: 'lucide-shrub',
    aliases: ['forest', 'undergrowth', 'park', 'nature'],
  },
  {
    id: 'lucide-shuffle',
    aliases: ['music'],
  },
  {
    id: 'lucide-sidebar-close',
    aliases: ['menu'],
  },
  {
    id: 'lucide-sidebar-open',
    aliases: ['menu'],
  },
  {
    id: 'lucide-sidebar',
    aliases: ['menu'],
  },
  {
    id: 'lucide-sigma',
    aliases: ['sum', 'calculate', 'formula', 'maths'],
  },
  {
    id: 'lucide-signal-high',
    aliases: ['connection', 'wireless', 'gsm', 'phone', '2g', '3g', '4g', '5g'],
  },
  {
    id: 'lucide-signal-low',
    aliases: ['connection', 'wireless', 'gsm', 'phone', '2g', '3g', '4g', '5g'],
  },
  {
    id: 'lucide-signal-medium',
    aliases: ['connection', 'wireless', 'gsm', 'phone', '2g', '3g', '4g', '5g'],
  },
  {
    id: 'lucide-signal-zero',
    aliases: [
      'connection',
      'wireless',
      'gsm',
      'phone',
      '2g',
      '3g',
      '4g',
      '5g',
      'lost',
    ],
  },
  {
    id: 'lucide-signal',
    aliases: ['connection', 'wireless', 'gsm', 'phone', '2g', '3g', '4g', '5g'],
  },
  {
    id: 'lucide-siren',
    aliases: [
      'police',
      'ambulance',
      'emergency',
      'security',
      'alert',
      'alarm',
      'light',
    ],
  },
  {
    id: 'lucide-skip-back',
    aliases: ['arrow', 'previous', 'music'],
  },
  {
    id: 'lucide-skip-forward',
    aliases: ['arrow', 'skip', 'next', 'music'],
  },
  {
    id: 'lucide-skull',
    aliases: ['death', 'danger', 'bone'],
  },
  {
    id: 'lucide-slack',
    aliases: ['logo'],
  },
  {
    id: 'lucide-slice',
    aliases: ['cutter', 'scalpel', 'knife'],
  },
  {
    id: 'lucide-sliders-horizontal',
    aliases: ['settings', 'filters', 'controls'],
  },
  {
    id: 'lucide-sliders',
    aliases: ['settings', 'controls'],
  },
  {
    id: 'lucide-smartphone-charging',
    aliases: ['phone', 'cellphone', 'device', 'power'],
  },
  {
    id: 'lucide-smartphone-nfc',
    aliases: ['contactless', 'payment', 'near-field communication'],
  },
  {
    id: 'lucide-smartphone',
    aliases: ['phone', 'cellphone', 'device'],
  },
  {
    id: 'lucide-smile-plus',
    aliases: [
      'emoji',
      'face',
      'happy',
      'good',
      'emotion',
      'react',
      'reaction',
      'add',
    ],
  },
  {
    id: 'lucide-smile',
    aliases: ['emoji', 'face', 'happy', 'good', 'emotion'],
  },
  {
    id: 'lucide-snowflake',
    aliases: ['cold', 'weather', 'freeze', 'snow', 'winter'],
  },
  {
    id: 'lucide-sofa',
    aliases: [
      'armchair',
      'furniture',
      'leisure',
      'lounge',
      'loveseat',
      'couch',
    ],
  },
  {
    id: 'lucide-sort-asc',
    aliases: ['filter'],
  },
  {
    id: 'lucide-sort-desc',
    aliases: ['filter'],
  },
  {
    id: 'lucide-soup',
    aliases: [
      'food',
      'dish',
      'restaurant',
      'course',
      'meal',
      'bowl',
      'starter',
    ],
  },
  {
    id: 'lucide-space',
    aliases: [
      'text',
      'selection',
      'letters',
      'characters',
      'font',
      'typography',
    ],
  },
  {
    id: 'lucide-speaker',
    aliases: ['audio', 'music'],
  },
  {
    id: 'lucide-spline',
    aliases: [],
  },
  {
    id: 'lucide-split-square-horizontal',
    aliases: ['split', 'divide'],
  },
  {
    id: 'lucide-split-square-vertical',
    aliases: ['split', 'divide'],
  },
  {
    id: 'lucide-sprout',
    aliases: ['leaf', 'nature', 'plant'],
  },
  {
    id: 'lucide-square',
    aliases: ['rectangle', 'aspect ratio', '1:1', 'shape'],
  },
  {
    id: 'lucide-stamp',
    aliases: ['mark', 'print', 'clone', 'loyalty', 'library'],
  },
  {
    id: 'lucide-star-half',
    aliases: ['bookmark', 'favorite', 'like', 'review', 'rating'],
  },
  {
    id: 'lucide-star-off',
    aliases: ['dislike', 'unlike', 'remove', 'unrate'],
  },
  {
    id: 'lucide-star',
    aliases: ['bookmark', 'favorite', 'like', 'review', 'rating'],
  },
  {
    id: 'lucide-step-back',
    aliases: ['arrow', 'previous', 'music', 'left', 'reverse'],
  },
  {
    id: 'lucide-step-forward',
    aliases: ['arrow', 'next', 'music', 'right', 'continue'],
  },
  {
    id: 'lucide-stethoscope',
    aliases: ['phonendoscope', 'medical', 'heart', 'lungs', 'sound'],
  },
  {
    id: 'lucide-sticker',
    aliases: ['reaction', 'emotion', 'smile', 'happy', 'feedback'],
  },
  {
    id: 'lucide-sticky-note',
    aliases: ['note', 'comment', 'reaction', 'memo'],
  },
  {
    id: 'lucide-stop-circle',
    aliases: ['media', 'music'],
  },
  {
    id: 'lucide-store',
    aliases: ['shop', 'supermarket', 'stand', 'boutique', 'building'],
  },
  {
    id: 'lucide-stretch-horizontal',
    aliases: ['items', 'flex', 'justify', 'distribute'],
  },
  {
    id: 'lucide-stretch-vertical',
    aliases: ['items', 'flex', 'justify', 'distribute'],
  },
  {
    id: 'lucide-strikethrough',
    aliases: ['cross out', 'delete', 'remove', 'format'],
  },
  {
    id: 'lucide-subscript',
    aliases: ['text'],
  },
  {
    id: 'lucide-subtitles',
    aliases: ['captions', 'closed captions', 'accessibility'],
  },
  {
    id: 'lucide-sun-dim',
    aliases: ['brightness', 'dim', 'low', 'brightness low'],
  },
  {
    id: 'lucide-sun-medium',
    aliases: ['brightness', 'medium'],
  },
  {
    id: 'lucide-sun-moon',
    aliases: ['night', 'light', 'moon', 'sun', 'brightness'],
  },
  {
    id: 'lucide-sun-snow',
    aliases: [
      'weather',
      'air conditioning',
      'temperature',
      'hot',
      'cold',
      'seasons',
    ],
  },
  {
    id: 'lucide-sun',
    aliases: ['brightness', 'weather', 'light', 'summer'],
  },
  {
    id: 'lucide-sunrise',
    aliases: ['weather', 'time', 'morning', 'day'],
  },
  {
    id: 'lucide-sunset',
    aliases: ['weather', 'time', 'evening', 'night'],
  },
  {
    id: 'lucide-superscript',
    aliases: ['text', 'exponent'],
  },
  {
    id: 'lucide-swiss-franc',
    aliases: ['currency', 'money', 'payment'],
  },
  {
    id: 'lucide-switch-camera',
    aliases: ['photo', 'selfie', 'front', 'back'],
  },
  {
    id: 'lucide-sword',
    aliases: ['battle', 'challenge', 'game', 'war', 'weapon'],
  },
  {
    id: 'lucide-swords',
    aliases: ['battle', 'challenge', 'game', 'war', 'weapon'],
  },
  {
    id: 'lucide-syringe',
    aliases: [
      'medicine',
      'medical',
      'needle',
      'pump',
      'plunger',
      'nozzle',
      'blood',
    ],
  },
  {
    id: 'lucide-table-2',
    aliases: ['sheet', 'grid', 'spreadsheet'],
  },
  {
    id: 'lucide-table',
    aliases: ['sheet', 'grid', 'spreadsheet'],
  },
  {
    id: 'lucide-tablet',
    aliases: ['device'],
  },
  {
    id: 'lucide-tablets',
    aliases: [
      'medicine',
      'medication',
      'drug',
      'prescription',
      'pills',
      'pharmacy',
    ],
  },
  {
    id: 'lucide-tag',
    aliases: ['label', 'badge', 'ticket', 'mark'],
  },
  {
    id: 'lucide-tags',
    aliases: ['labels', 'badges', 'tickets', 'marks', 'copy', 'multiple'],
  },
  {
    id: 'lucide-target',
    aliases: ['logo', 'bullseye'],
  },
  {
    id: 'lucide-tent',
    aliases: ['campsite', 'wigwam'],
  },
  {
    id: 'lucide-terminal-square',
    aliases: ['code', 'command line', 'prompt', 'shell'],
  },
  {
    id: 'lucide-terminal',
    aliases: ['code', 'command line', 'prompt', 'shell'],
  },
  {
    id: 'lucide-test-tube-2',
    aliases: [
      'tube',
      'vial',
      'phial',
      'flask',
      'ampoule',
      'ampule',
      'lab',
      'chemistry',
      'experiment',
      'test',
    ],
  },
  {
    id: 'lucide-test-tube',
    aliases: [
      'tube',
      'vial',
      'phial',
      'flask',
      'ampoule',
      'ampule',
      'lab',
      'chemistry',
      'experiment',
      'test',
    ],
  },
  {
    id: 'lucide-test-tubes',
    aliases: [
      'tubes',
      'vials',
      'phials',
      'flasks',
      'ampoules',
      'ampules',
      'lab',
      'chemistry',
      'experiment',
      'test',
    ],
  },
  {
    id: 'lucide-text-cursor-input',
    aliases: ['select'],
  },
  {
    id: 'lucide-text-cursor',
    aliases: ['select'],
  },
  {
    id: 'lucide-text-selection',
    aliases: ['find', 'search'],
  },
  {
    id: 'lucide-text',
    aliases: ['find', 'search', 'data', 'txt', 'pdf', 'document'],
  },
  {
    id: 'lucide-thermometer-snowflake',
    aliases: [
      'temperature',
      'celsius',
      'fahrenheit',
      'weather',
      'cold',
      'freeze',
      'freezing',
    ],
  },
  {
    id: 'lucide-thermometer-sun',
    aliases: ['temperature', 'celsius', 'fahrenheit', 'weather', 'warm', 'hot'],
  },
  {
    id: 'lucide-thermometer',
    aliases: ['temperature', 'celsius', 'fahrenheit', 'weather'],
  },
  {
    id: 'lucide-thumbs-down',
    aliases: ['dislike', 'bad', 'emotion'],
  },
  {
    id: 'lucide-thumbs-up',
    aliases: ['like', 'good', 'emotion'],
  },
  {
    id: 'lucide-ticket',
    aliases: ['entry', 'pass', 'voucher'],
  },
  {
    id: 'lucide-timer-off',
    aliases: ['time', 'timer', 'stopwatch'],
  },
  {
    id: 'lucide-timer-reset',
    aliases: ['time', 'timer', 'stopwatch'],
  },
  {
    id: 'lucide-timer',
    aliases: ['time', 'timer', 'stopwatch'],
  },
  {
    id: 'lucide-toggle-left',
    aliases: ['on', 'off', 'switch'],
  },
  {
    id: 'lucide-toggle-right',
    aliases: ['on', 'off', 'switch'],
  },
  {
    id: 'lucide-tornado',
    aliases: ['weather', 'wind', 'storm', 'hurricane'],
  },
  {
    id: 'lucide-tower-control',
    aliases: ['airport', 'travel', 'tower', 'transportation', 'lighthouse'],
  },
  {
    id: 'lucide-toy-brick',
    aliases: ['lego', 'block', 'addon', 'plugin', 'integration'],
  },
  {
    id: 'lucide-train',
    aliases: ['transport', 'metro', 'subway', 'underground'],
  },
  {
    id: 'lucide-trash-2',
    aliases: ['garbage', 'delete', 'remove', 'bin'],
  },
  {
    id: 'lucide-trash',
    aliases: ['garbage', 'delete', 'remove', 'bin'],
  },
  {
    id: 'lucide-tree-deciduous',
    aliases: ['tree', 'forest', 'park', 'nature'],
  },
  {
    id: 'lucide-tree-pine',
    aliases: ['tree', 'pine', 'forest', 'park', 'nature'],
  },
  {
    id: 'lucide-trees',
    aliases: ['tree', 'forest', 'park', 'nature'],
  },
  {
    id: 'lucide-trello',
    aliases: ['logo', 'brand'],
  },
  {
    id: 'lucide-trending-down',
    aliases: ['statistics'],
  },
  {
    id: 'lucide-trending-up',
    aliases: ['statistics'],
  },
  {
    id: 'lucide-triangle',
    aliases: ['delta', 'shape'],
  },
  {
    id: 'lucide-trophy',
    aliases: ['prize', 'sports', 'winner', 'achievement', 'award'],
  },
  {
    id: 'lucide-truck',
    aliases: ['delivery', 'van', 'shipping', 'transport', 'lorry'],
  },
  {
    id: 'lucide-tv-2',
    aliases: ['flatscreen', 'television', 'stream', 'display'],
  },
  {
    id: 'lucide-tv',
    aliases: ['television', 'stream'],
  },
  {
    id: 'lucide-twitch',
    aliases: ['logo', 'social'],
  },
  {
    id: 'lucide-twitter',
    aliases: ['logo', 'social'],
  },
  {
    id: 'lucide-type',
    aliases: ['text', 'font', 'typography'],
  },
  {
    id: 'lucide-umbrella',
    aliases: ['rain', 'weather'],
  },
  {
    id: 'lucide-underline',
    aliases: ['text', 'format'],
  },
  {
    id: 'lucide-undo-2',
    aliases: ['redo', 'rerun', 'history'],
  },
  {
    id: 'lucide-undo',
    aliases: ['redo', 'rerun', 'history'],
  },
  {
    id: 'lucide-unlink-2',
    aliases: ['url', 'unchain'],
  },
  {
    id: 'lucide-unlink',
    aliases: ['url', 'unchain'],
  },
  {
    id: 'lucide-unlock',
    aliases: ['security'],
  },
  {
    id: 'lucide-upload-cloud',
    aliases: ['file'],
  },
  {
    id: 'lucide-upload',
    aliases: ['file'],
  },
  {
    id: 'lucide-usb',
    aliases: [
      'universal',
      'serial',
      'bus',
      'controller',
      'connector',
      'interface',
    ],
  },
  {
    id: 'lucide-user-check',
    aliases: [
      'followed',
      'subscribed',
      'done',
      'todo',
      'tick',
      'complete',
      'task',
    ],
  },
  {
    id: 'lucide-user-cog',
    aliases: ['settings', 'edit', 'cog', 'gear'],
  },
  {
    id: 'lucide-user-minus',
    aliases: ['delete', 'remove', 'unfollow', 'unsubscribe'],
  },
  {
    id: 'lucide-user-plus',
    aliases: ['new', 'add', 'create', 'follow', 'subscribe'],
  },
  {
    id: 'lucide-user-x',
    aliases: ['delete', 'remove', 'unfollow', 'unsubscribe', 'unavailable'],
  },
  {
    id: 'lucide-user',
    aliases: ['person', 'account', 'contact'],
  },
  {
    id: 'lucide-users',
    aliases: ['group', 'people'],
  },
  {
    id: 'lucide-utensils-crossed',
    aliases: [
      'food',
      'restaurant',
      'meal',
      'cutlery',
      'breakfast',
      'dinner',
      'supper',
    ],
  },
  {
    id: 'lucide-utensils',
    aliases: [
      'food',
      'restaurant',
      'meal',
      'cutlery',
      'breakfast',
      'dinner',
      'supper',
    ],
  },
  {
    id: 'lucide-utility-pole',
    aliases: ['electricity', 'energy', 'transmission line', 'telegraph pole'],
  },
  {
    id: 'lucide-vegan',
    aliases: [
      'vegetarian',
      'fruitarian',
      'herbivorous',
      'animal rights',
      'diet',
    ],
  },
  {
    id: 'lucide-venetian-mask',
    aliases: ['mask', 'masquerade', 'impersonate', 'secret', 'incognito'],
  },
  {
    id: 'lucide-verified',
    aliases: ['check'],
  },
  {
    id: 'lucide-vibrate-off',
    aliases: [
      'smartphone',
      'notification',
      'rumble',
      'haptic feedback',
      'notifications',
    ],
  },
  {
    id: 'lucide-vibrate',
    aliases: ['smartphone', 'notification', 'rumble', 'haptic feedback'],
  },
  {
    id: 'lucide-video-off',
    aliases: ['camera', 'movie', 'film'],
  },
  {
    id: 'lucide-video',
    aliases: ['camera', 'movie', 'film'],
  },
  {
    id: 'lucide-view',
    aliases: ['eye', 'look'],
  },
  {
    id: 'lucide-voicemail',
    aliases: ['phone', 'cassette'],
  },
  {
    id: 'lucide-volume-1',
    aliases: ['music', 'sound', 'speaker'],
  },
  {
    id: 'lucide-volume-2',
    aliases: ['music', 'sound', 'speaker'],
  },
  {
    id: 'lucide-volume-x',
    aliases: ['music', 'sound', 'mute', 'speaker'],
  },
  {
    id: 'lucide-volume',
    aliases: ['music', 'sound', 'mute', 'speaker'],
  },
  {
    id: 'lucide-vote',
    aliases: ['vote', 'poll', 'ballot', 'political', 'social', 'check', 'tick'],
  },
  {
    id: 'lucide-wallet',
    aliases: ['money', 'finance', 'pocket'],
  },
  {
    id: 'lucide-wand-2',
    aliases: ['magic', 'wizard'],
  },
  {
    id: 'lucide-wand',
    aliases: ['magic', 'selection'],
  },
  {
    id: 'lucide-warehouse',
    aliases: ['storage', 'logistics', 'building'],
  },
  {
    id: 'lucide-watch',
    aliases: ['clock', 'time'],
  },
  {
    id: 'lucide-waves',
    aliases: ['water', 'sea', 'sound', 'hertz', 'wavelength', 'vibrate'],
  },
  {
    id: 'lucide-webcam',
    aliases: ['camera', 'security'],
  },
  {
    id: 'lucide-webhook',
    aliases: ['push api', 'interface', 'callback'],
  },
  {
    id: 'lucide-wheat-off',
    aliases: [
      'corn',
      'cereal',
      'grain',
      'gluten free',
      'allergy',
      'intolerance',
      'diet',
    ],
  },
  {
    id: 'lucide-wheat',
    aliases: ['corn', 'cereal', 'grain', 'gluten'],
  },
  {
    id: 'lucide-whole-word',
    aliases: [
      'text',
      'selection',
      'letters',
      'characters',
      'font',
      'typography',
    ],
  },
  {
    id: 'lucide-wifi-off',
    aliases: ['disabled'],
  },
  {
    id: 'lucide-wifi',
    aliases: ['connection', 'signal', 'wireless'],
  },
  {
    id: 'lucide-wind',
    aliases: ['weather', 'air', 'blow'],
  },
  {
    id: 'lucide-wine-off',
    aliases: [
      'alcohol',
      'beverage',
      'drink',
      'glass',
      'alcohol free',
      'abstinence',
      'abstaining',
      'teetotalism',
      'allergy',
      'intolerance',
    ],
  },
  {
    id: 'lucide-wine',
    aliases: [
      'alcohol',
      'beverage',
      'bar',
      'drink',
      'glass',
      'sommelier',
      'vineyard',
      'winery',
    ],
  },
  {
    id: 'lucide-wrap-text',
    aliases: ['words', 'lines', 'break', 'paragraph'],
  },
  {
    id: 'lucide-wrench',
    aliases: ['account', 'tool', 'settings', 'spanner'],
  },
  {
    id: 'lucide-x-circle',
    aliases: ['cancel', 'close', 'delete', 'remove', 'times', 'clear', 'maths'],
  },
  {
    id: 'lucide-x-octagon',
    aliases: ['delete', 'stop', 'alert', 'warning', 'times', 'clear', 'maths'],
  },
  {
    id: 'lucide-x-square',
    aliases: ['cancel', 'close', 'delete', 'remove', 'times', 'clear', 'maths'],
  },
  {
    id: 'lucide-x',
    aliases: ['cancel', 'close', 'delete', 'remove', 'times', 'clear', 'maths'],
  },
  {
    id: 'lucide-youtube',
    aliases: ['logo', 'social', 'video', 'play'],
  },
  {
    id: 'lucide-zap-off',
    aliases: ['flash', 'camera', 'lightning'],
  },
  {
    id: 'lucide-zap',
    aliases: ['flash', 'camera', 'lightning'],
  },
  {
    id: 'lucide-zoom-in',
    aliases: ['magnifying glass', 'plus'],
  },
  {
    id: 'lucide-zoom-out',
    aliases: ['magnifying glass', 'plus'],
  },
];

getIconIds().forEach((id) => {
  if (!/^lucide/.test(id)) {
    iconListRaw.push({
      id,
      aliases: [],
    });
  }
});

export const iconList = new Fuse(iconListRaw, {
  threshold: 0.1,
  minMatchCharLength: 2,
  keys: ['id', 'aliases'],
});
