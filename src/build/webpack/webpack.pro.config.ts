/*
 * @Author: Cookie
 * @Date: 2021-07-18 19:16:47
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-19 16:18:09
 * @Description:
 */

import getBaseConfig from './webpack.base.config'
import { getCwdPath, } from '@/util'
import { Configuration } from 'webpack'


interface IWebpackConfig extends Configuration {
  entry: {
    app: string
  }
  output: {
    filename: string,
    path: string
  }
  template: string
  cssLoader: any
}

export const getProConfig = (config: IWebpackConfig): Configuration => {
  const { entry: { app }, template, output: { filename, path }, cssLoader, plugins, ...rest } = config

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
      template: getCwdPath(template || 'public/index.html'),
      cssLoader,
      plugins
    }),
    ...rest // 项目中 config 的优先级更高
  }
}