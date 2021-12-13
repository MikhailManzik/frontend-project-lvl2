import { describe, expect, it } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedStylish = getFixturePath('result_stylish');

describe('genDiffStylish', () => {
  it('test 1', () => {
    const actual = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
    expect(actual).toBe(expectedStylish);
  });
});

// describe('genDiffYaml', () => {
//   it('test 1', () => {
//     const actual = genDiff('./__fixtures__/file3.yaml', './__fixtures__/file4.yaml');
//     expect(actual).toBe(expectedYaml);
//   });
// });
