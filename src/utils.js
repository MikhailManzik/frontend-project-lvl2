import fs from 'fs';
import path from 'path';

export const readFile = (file) => {
  const fullPath = path.resolve(file);
  return fs.readFileSync(fullPath, { encoding: 'utf8' });
};

export const stringify = (primitives, replacer = ' ', spacesCount = 1) => {
  if (typeof primitives !== 'object') {
    return String(primitives);
  }

  let result = '';
  const iter = (data, depth) => {
    const entries = Object.entries(data);
    const tree = entries.map((item) => {
      const [key, value] = item;
      if (typeof value === 'object') {
        return `${replacer.repeat(spacesCount + depth)}${key}: {\n${iter(value, spacesCount + depth)}${replacer.repeat(spacesCount + depth)}}\n`;
      }
      return `${replacer.repeat(spacesCount + depth)}${key}: ${value}\n`;
    });

    return tree.join('');
  };

  result = iter(primitives, 0);
  return `{\n${result}}`;
};
