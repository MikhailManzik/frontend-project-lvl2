import _ from 'lodash';
import path from 'path';
import readFile from './utils.js';
import parser from './parsers.js';

export default (file1, file2) => {
  const filepath1 = readFile(file1);
  const filepath2 = readFile(file2);

  const format = path.extname(file1).slice(1);
  const parserType = parser(format);

  const parsedFile1 = parserType(filepath1);
  const parsedFile2 = parserType(filepath2);

  const keys1 = Object.keys(parsedFile1);
  const keys2 = Object.keys(parsedFile2);

  const sumKeys = _.union(keys1, keys2).sort();

  const result = sumKeys.map((key) => {
    let str = '';
    if (parsedFile1[key] === parsedFile2[key]) {
      str = `  ${key}: ${parsedFile1[key]}\n`;
    } if (parsedFile1[key] !== parsedFile2[key]) {
      str = `- ${key}: ${parsedFile1[key]}\n + ${key}: ${parsedFile2[key]}\n`;
    } if (!_.has(parsedFile1, key)) {
      str = `+ ${key}: ${parsedFile2[key]}\n`;
    } if (!_.has(parsedFile2, key)) {
      str = `- ${key}: ${parsedFile1[key]}\n`;
    }
    return str;
  }).join(' ');

  console.log(`{\n ${result}}`);
};
