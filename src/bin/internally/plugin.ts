/*
 * @Author: Cookie
 * @Description: 插件注册
 */


import inquirer from '@/inquirer';

const { registerPlugin } = inquirer

/**
 * @description: 下载插件的 npm 包并登记包名
 * @param {*}
 * @return {*}
 */
export const registerPluginCommand = {
  version: '0.1.0',
  description: 'register plugin',
  command: 'register plugin',
  action: registerPlugin
}
