import _ from 'lodash';
import path from 'path';
import { readFile } from './utils.js';
import parser from './parsers.js';
import types from './types.js';

export default (file1, file2) => {
  const filepath1 = readFile(file1);
  const filepath2 = readFile(file2);

  const format = path.extname(file1).slice(1);
  const parserType = parser(format);

  const obj1 = parserType(filepath1);
  const obj2 = parserType(filepath2);

  const generateTree = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);

    const sumKeys = _.union(keys1, keys2).sort();

    return sumKeys.map((key) => {
      if (typeof data1[key] === 'object' && typeof data2[key] === 'object') {
        return {
          key,
          value: generateTree(data1[key], data2[key]),
        };
      } if (!_.has(data1, key)) {
        return {
          type: types.addOperation,
          key,
          value: data2[key],
        };
      } if (!_.has(data2, key)) {
        return {
          type: types.removeOperation,
          key,
          value: data1[key],
        };
      } if (data1[key] !== data2[key]) {
        return {
          type: types.updateOperation,
          key,
          oldValue: data1[key],
          newValue: data2[key],
        };
      }
      return {
        type: types.unchangedOperation,
        key,
        value: data1[key],
      };
    });
  };

  return generateTree(obj1, obj2);
};
