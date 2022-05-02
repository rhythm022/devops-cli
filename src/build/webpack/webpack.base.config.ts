

import { getDirPath } from '@/util'
import babelConfig from './babel.config'
import { resolve } from 'path'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

interface IWebpack {
  mode?: "development" | "production" | "none";
  entry: any
  output: any
  template: string
}

export default ({
  mode,
  entry,
  output,
  template
}: IWebpack) => {
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
          test: /\.(css|less)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        ident: "postcss"
                      },
                    ],
                  ],
                },
              }
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,// 支持图片
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,// 支持字体
          loader: 'file-loader'
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template,
        filename: 'index.html',
      }),
    ],
  }
}