

import { getDirPath ,getCwdPath} from '@/util'
import babelConfig from './babel.config'
import { resolve } from 'path'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { ProgressPlugin } = require('webpack')
import { Configuration } from 'webpack'

interface IWebpack extends Configuration {
  mode?: "development" | "production" | "none";
  template: string
  cssLoader?: any,
  plugins?: any
}

export default ({
  mode,
  entry,
  output,
  template,
  cssLoader = {},
  plugins = []
}: IWebpack): Configuration => {
  return {
    mode,
    entry,
    target: 'web',
    output,
    resolveLoader: {
      modules: ['node_modules', getDirPath('../../node_modules')]// 使用 dev-cli 的 Loader
    },
    resolve: {
      alias: {
        '@': resolve('src') // 支持别名
      },
      extensions: ['.ts', '.tsx', '.js', '.json'], // 支持 ts
      modules: ['node_modules', getDirPath('../../node_modules')],// 使用 dev-cli 的依赖, 不使用项目的依赖
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: babelConfig,
          exclude: [
            [getDirPath('node_modules')], // 不编译依赖代码
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,// 支持图片
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,// 支持字体
          loader: 'file-loader'
        },
        cssLoader // 抽出 cssLoader
      ].filter(Boolean),
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [getCwdPath('dist')],
      }),
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        template,
        filename: 'index.html',
      }),
      ...plugins // 抽出 css plugins
    ].filter(Boolean),
  }
}