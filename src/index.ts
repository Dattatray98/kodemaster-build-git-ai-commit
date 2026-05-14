#!/usr/bin/env bun

import { Command } from 'commander';
import chalk from 'chalk';
import process from 'process';
import { getStagedDiff } from './git/diff';
import { parseDiff } from './git/parser';

const program = new Command();

program
  .name('git-ai-commit')
  .description('AI-powered commit message generator')
  .version('1.0.0');


program
  .command("hello")
  .description("says hello")
  .action(()=>{
    console.log(chalk.green('Hello world'));
    console.log(chalk.gray('This is styled text'));
  });


program
  .command("diff")
  .description("shows git diff")
  .action(async ()=>{
    const stdout = await getStagedDiff();
    console.log(stdout);
  });


program
  .command('parsed-diff')
  .description("shows the prased file chnage difference")
  .action(async()=>{
    const diff = await getStagedDiff();

    if(!diff){
      console.log(chalk.red("No staged changes found. Did you forget to git add?"));
      process.exit(1);
    }

    const changes = parseDiff(diff);
    console.log(chalk.yellow.bold(`Found ${changes.length} changed file(s)`));

    console.log(changes);
  });

program.parse(process.argv);