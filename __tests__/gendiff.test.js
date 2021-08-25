// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import { describe, expect, it } from '@jest/globals';
import genDiff from '../src/index.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const expected = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');

describe('genDiff', () => {
  it('test 1', () => {
    const actual = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
    expect(actual).toBe(expected);
  });
});
