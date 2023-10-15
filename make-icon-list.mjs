import fs from 'fs';

function readFiles(dirname, onFileContent, onError, done) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    for (let filename of filenames) {
      if (!filename.endsWith('.json')) continue;
      const content = fs.readFileSync(dirname + filename);
      onFileContent(filename, JSON.parse(content.toString()));
    }

    done();
  });
}

const iconList = [];

readFiles(
  '../lucide/icons/',
  function (filename, content) {
    const id = filename.split('.')[0];
    const tags = content.tags || [];
    const aliases = content.aliases || [];

    iconList.push({
      id: 'lucide-' + id,
      aliases: [...tags, ...aliases],
    });
  },
  function (err) {
    throw err;
  },
  function () {
    fs.writeFileSync(
      './src/iconList.ts',
      `import Fuse from 'fuse.js';
import { getIconIds } from 'obsidian';

export const iconListRaw = ${JSON.stringify(iconList, null, 2)};

getIconIds().forEach(id => {
  if (!/^lucide/.test(id)) {
    iconListRaw.push({
      id,
      aliases: [],
    })
  }
})

export const iconList = new Fuse(iconListRaw, {
  threshold: 0.1,
  minMatchCharLength: 2,
  keys: ['id', 'aliases'],
});
`
    );
  }
);
