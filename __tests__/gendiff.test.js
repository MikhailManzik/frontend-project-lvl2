// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import { describe, expect, it } from '@jest/globals';
import genDiff from '../src/index.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const expectedJson = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
const expectedYaml = genDiff('./__fixtures__/file3.yaml', './__fixtures__/file4.yaml');

describe('genDiffJson', () => {
  it('test 1', () => {
    const actual = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
    expect(actual).toBe(expectedJson);
  });
});

describe('genDiffYaml', () => {
  it('test 1', () => {
    const actual = genDiff('./__fixtures__/file3.yaml', './__fixtures__/file4.yaml');
    expect(actual).toBe(expectedYaml);
  });
});
