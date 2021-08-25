#!/usr/bin/env node

import commander from 'commander';
import gendiff from '../src/index.js';

const { Command } = commander;
const program = new Command();

program
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<file1> <file2>')
  .action((file1, file2) => {
    gendiff(file1, file2);
  });

program.parse();
