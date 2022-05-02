/*
 * @Author: Cookie
 * @Date: 2021-07-18 19:16:47
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-18 20:30:39
 * @Description:
 */

import getBaseConfig from './webpack.base.config'
import { getCwdPath, } from '@/util'


interface IWebpackConfig {
  entry: {
    app: string
  }
  output: {
    filename: string,
    path: string
  }
  template: string
}

export const getProConfig = (config: IWebpackConfig) => {
  const { entry: { app }, template, output: { filename, path }, ...rest } = config

  return {
    ...getBaseConfig({// 项目中 config 的优先级更高
      mode: 'production',
      entry: {
        app: getCwdPath(app || './src/index.js')
      },
      output: {
        filename: filename || 'build.js',
        path: getCwdPath(path || './dist'), 
      },
      template: getCwdPath(template || 'public/index.html')
    }),
    ...rest // 项目中 config 的优先级更高
  }
}