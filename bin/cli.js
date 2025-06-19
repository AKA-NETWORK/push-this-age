#!/usr/bin/env node
const { program } = require('commander');
const { bold } = require('chalk');

program
  .command('push <message>')
  .description('Rewrite your commit messages with #PushThisAge energy')
  .action((msg) => console.log(bold(`🚀 PUSHED: "${msg}" → "${msg.toUpperCase()} FOR THE FUTURE"`)));

program.parse();
