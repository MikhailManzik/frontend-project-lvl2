#!/usr/bin/env node

import commander from 'commander';

const { Command } = commander;
const program = new Command();

program
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1> <filepath2>');

program.parse();
