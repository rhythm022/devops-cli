/*
 * @Author: Cookie
 * @Date: 2021-07-04 14:02:22
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-19 21:07:50
 * @Description:
 */

import webpack from 'webpack';
import { getCwdPath, loggerTiming, loggerError, loggerInfo, loggerSuccess } from '@/util'
import { loadFile } from '@/util/file'
import { getProConfig } from './webpack.pro.config'
import { getDevConfig } from './webpack.dev.config'
import { getCssLoaders, getCssPlugin } from './css.config'
import cacheConfig from './cache.config';
const openBrowser = require('react-dev-utils/openBrowser')

// const WebpackDevServer = require('webpack-dev-server/lib/Server')
const WebpackDevServer = require('webpack-dev-server')
export const buildWebpack = () => {
  
  loggerTiming('WEBPACK BUILD');

  const rewriteConfig = loadFile<any>(getCwdPath('./cli.config.json'), false)

  const webpackConfig = getProConfig({ ...rewriteConfig, cssLoader: getCssLoaders(false), ...getCssPlugin() , ...cacheConfig})

  const compiler = webpack(webpackConfig);

  try {
    compiler.run((err: any, stats: any) => {

      if (err) {
        loggerError(err);
      } else {
        loggerSuccess('WEBPACK SUCCESS!');
      }
      compiler.close(() => {
        loggerInfo('WEBPACK GENERATE CACHE');
      });
      loggerTiming('WEBPACK BUILD', false);
    });
  } catch (error) {
    loggerError(error as string)
  }

}

export const devWebpack = () => {
  loggerTiming('WEBPACK DEV');
  let isFirstCompile = true

  const rewriteConfig = loadFile<any>(getCwdPath('./cli.config.json'), false)
  const webpackConfig = getDevConfig({ ...rewriteConfig, cssLoader: getCssLoaders(true) , ...cacheConfig})

  const HOST = 'localhost'
  const PORT = 8000
  const protocol = 'http'
  const url = `${protocol}://${HOST}:${PORT}`

  const compiler = webpack(webpackConfig);

  const devServerOptions = {
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'info',
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: PORT,
    open: false,
  };

  const server = new WebpackDevServer(devServerOptions, compiler);

  compiler.hooks.done.tap('done', stats => {
    if (isFirstCompile) {
      isFirstCompile = false
      console.log('oppo the Browser to:：', url)
      openBrowser(url)
    }
  })

  server.start(() => {
    loggerTiming('WEBPACK DEV', false);
    loggerInfo(`Starting server on ${url}`);
  });
}
