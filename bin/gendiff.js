#!/usr/bin/env node

import commander from 'commander';

const { Command } = commander;
const program = new Command();

program
  .version('0.0.1', '-V, --vers', 'output the version number');

program
  .helpOption('-h, --help', 'output usage information');

program.parse();
