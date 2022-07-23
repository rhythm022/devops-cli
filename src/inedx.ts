/*
 * @Author: Cookie
 * @Date: 2021-07-03 20:52:44
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:14:11
 * @Description:
 */
import { getEslint } from './eslint'

import { loggerError } from '@/util'
import { buildWebpack as selfBuildWebpack , devWebpack as selfDevWebpack} from './build/webpack'
import { buildRollup as selfBuildRollup } from './build/rollup'
import { checkVersion as selfCheckVersion } from './util/npm'

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

// webpack 开发
export const devWebpack = async () => {
  try {
    await selfDevWebpack()
  } catch (error) {
    loggerError(error as string)
  }
}

// rollup 构建
export const buildRollup = async () => {
  try {
    await getEslint()
    await selfBuildRollup()
  } catch (error) {
    loggerError(error as string)
  }
}

export const checkVersion = async () => {
  await selfCheckVersion()
}