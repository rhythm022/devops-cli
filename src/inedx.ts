/*
 * @Author: Cookie
 * @Date: 2021-07-03 20:52:44
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:14:11
 * @Description:
 */
import { getEslint } from './eslint'

export const execEslint = async () => {
  await getEslint()
}