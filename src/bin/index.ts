#!/usr/bin/env node

/*
 * @Author: Cookie
 * @Date: 2021-07-03 22:28:14
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:15:27
 * @Description:
 */
import path from "path";
import alias from "module-alias";
alias(path.resolve(__dirname, "../../"));

import { Command } from 'commander'
import {
  gitInitCommand,
  webpackCommand,
  rollupCommand,
  lintCommand,
  addTplCommand,
  selectTplCommand
} from './internally'

const program = new Command(require('../../package').commandName)

interface ICommand {
  version: string
  description: string
  command: string
  action: (value?: any) => void
}

const initCommand = (commandConfig: ICommand[]) => {
  commandConfig.forEach(({ version, description, command, action }) => {
    program
      .version(version)
      .description(description)
      .command(command)
      .action((value) => {
        action(value)
      })
  })
}

initCommand([
  gitInitCommand,
  webpackCommand,
  rollupCommand,
  lintCommand,
  addTplCommand,
  selectTplCommand
])

program.parse(process.argv)
