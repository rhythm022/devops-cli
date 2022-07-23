/*
 * @Author: Cookie
 * @Description:
 */

import { ICommand } from '../index'
import { getPluginList } from '@/plugin'

const extraPack = getPluginList() as any[]

export const initExtraPack = () => {
  const extraPacks: ICommand[] = []
  extraPack.forEach((extra) => {
    extraPacks.push(module.require(extra.name))// 根据已注册的插件名从 node_modules 中获取 plugin 实例
  })
  return extraPacks
}