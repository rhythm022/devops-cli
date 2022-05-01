/*
 * @Author: Cookie
 * @Date: 2021-07-03 20:52:44
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:14:11
 * @Description:
 */
import { getEslint } from './eslint'

import { loggerError } from './util'
import { buildWebpack as selfBuildWebpack } from './build/webpack'

export const execEslint = async () => {
  await getEslint()
}

export const buildWebpack = async () => {
  try {
    await getEslint()
    await selfBuildWebpack()
  } catch (error) {
    loggerError(error as string)
  }
}