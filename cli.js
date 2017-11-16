#!/usr/bin/env node

const program = require('commander');

const {start, create, build} = require('./logic');

program
  .version('0.0.1')
  .description('Project management system');

program
  .command('start [path]')
  .alias('s')
  .description('Start a project')
  .action((path) => start(path));

program
  .command('create <name>')
  .alias('c')
  .description('Create a project')
  .action(name => create(name));

program
  .command('build [path]')
  .alias('r')
  .description('Build a project')
  .action(path => build(path));

program.parse(process.argv);