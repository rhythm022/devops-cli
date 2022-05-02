#!/usr/bin/env node

/*
 * @Author: Cookie
 * @Date: 2021-07-03 22:28:14
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:15:27
 * @Description:
 */
require('module-alias/register')
import { Command } from 'commander'




import { execEslint,buildWebpack,buildRollup } from '../inedx'

const program = new Command()

program
  .version('0.1.0')
  .description('start eslint and fix code')
  .command('eslint')
  .action((value) => {
    execEslint()
  })

  program
  .version('0.1.0')
  .description('start webpack build')
  .command('webpack')
  .action((value) => {
    buildWebpack()
  })

  program
  .version('0.1.0')
  .description('start rollup build')
  .command('rollup')
  .action((value) => {
    buildRollup()
  })

program.parse(process.argv)
