/*
 * @Author: Cookie
 * @Date: 2021-07-18 19:16:47
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-18 22:44:07
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

export const getDevConfig = (config: IWebpackConfig) => { // 除了 mode 项,和 getProConfig 没有任何差别
  const { entry: { app }, template, output: { filename, path }, ...rest } = config

  return {
    ...getBaseConfig({
      mode: 'development',
      entry: {
        app: getCwdPath(app || './src/index.js')
      },
      output: {
        filename: filename || 'build.js',
        path: getCwdPath(path || './dist'), 
      },
      template: getCwdPath(template || 'public/index.html')
    }),
    ...rest
  }
}