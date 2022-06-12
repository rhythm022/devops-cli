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
import inquirer from '@/inquirer';

const { initGit, addTpl, selectTpl } = inquirer



import { execEslint,buildWebpack,buildRollup ,devWebpack} from '../inedx'

const program = new Command()

/**
 * @description: eslint 检测
 * @param {*}
 * @return {*}
 */
program
  .version('0.1.0')
  .description('start eslint and fix code')
  .command('eslint')
  .action((value) => {
    execEslint()
  })


  /**
   * @description: webpack 构建
   * @param {*}
   * @return {*}
   */
  program
  .version('0.1.0')
  .description('start webpack build')
  .command('webpack')
  .action((value) => {
    const { NODE_ENV = 'development' } = process.env

    if (NODE_ENV === 'development') return devWebpack()
    
    buildWebpack()
  })


  /**
   * @description: rollup 构建
   * @param {*}
   * @return {*}
   */
  program
  .version('0.1.0')
  .description('start rollup build')
  .command('rollup')
  .action((value) => {
    buildRollup()
  })


  /**
   * @description: 初始化 git 信息
   * @param {*}
   * @return {*}
   */
  program
  .version('0.1.0')
  .description('git init')
  .command('git init')
  .action(() => {
    initGit()
  })


  /**
   * @description: 添加模板
   * @param {*}
   * @return {*}
   */
  program
  .version('0.1.0')
  .description('add tpl')
  .command('add tpl')
  .action(() => {
    addTpl()
  })


/**
* @description: clone 模板到本地
* @param {*}
* @return {*}
*/
program
.version('0.1.0')
.description('init tpl')
.command('init tpl')
.action(() => {
  selectTpl()
})

program.parse(process.argv)
