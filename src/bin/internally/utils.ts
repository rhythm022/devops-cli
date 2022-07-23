/*
 * @Author: Cookie
 * @Description: 工具类
 */

import { checkVersion } from '@/inedx';

/**
 * @description: 检查版本
 * @param {*}
 * @return {*}
 */
export const checkVersionCommand = {
  version: '0.1.0',
  description: 'check cli version',
  command: 'check',
  action: checkVersion
}

