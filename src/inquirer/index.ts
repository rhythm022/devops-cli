/*
 * @Author: Cookie
 * @Date: 2021-08-12 22:18:07
 * @LastEditors: Cookie
 * @LastEditTime: 2021-08-12 23:30:10
 * @Description:
 */

import * as git from '@/inquirer/initGit';
import * as tpl from '@/inquirer/tpl';
import * as registerPlugin from '@/inquirer/registerPlugin';

export default {
  ...tpl,
  ...git,
  ...registerPlugin
}