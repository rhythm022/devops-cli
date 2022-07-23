/*
 * @Author: Cookie
 * @Date: 2021-08-03 23:41:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-29 23:25:04
 * @Description: 注册组件
 */

import inquirer from 'inquirer';
import { existNpm, npmInstall } from '@/util/npm'
import { loggerSuccess } from '@/util';
import { updatePlugin } from '@/plugin'

const promptList = [
  {
    type: 'input',
    message: '请输入插件名称:',
    name: 'pluginName',
    default: 'testuse',
    transformer(v: string) {
      return `@j30/${v}`
    }
  }
];

export const registerPlugin = () => {
  inquirer.prompt(promptList).then(async (answers: any) => {
    const { pluginName } = answers

    const exist = await existNpm(`@j30/${pluginName}`)
    if (exist) {
      npmInstall(`@j30/${pluginName}`)
      updatePlugin({ name: `@j30/${pluginName}` })
      loggerSuccess(`@j30/${pluginName} register successful!`)
    }
  })
}