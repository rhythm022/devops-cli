/*
 * @Author: Cookie
 * @Date: 2021-07-04 14:02:22
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 21:12:22
 * @Description:
 */

import webpack from 'webpack';
import getConfig from './webpack.config'
import { getCwdPath, loggerTiming,loggerError } from '@/util'
import ora from "ora";

export const buildWebpack = () => {
  const spinner = ora('Webpack building...\n')
  
  const config = getConfig({
    mode: 'production',
    entry: {
      app: getCwdPath('./src/index.js')
    },
    output: {
      filename: 'build.js',
      path: getCwdPath('./dist'), 
    },
    template: getCwdPath('public/index.html')
  })
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    loggerTiming('WEBPACK BUILD');
    spinner.start();

    compiler.run((err: any, stats: any) => {
      if (err) {
        if (!err.message) {
          spinner.fail('WEBPACK BUILD FAILED!');
          loggerError(err);
          return reject(err);
        }
      }
    });

    spinner.succeed('WEBPACK BUILD Successful!');
    loggerTiming('WEBPACK BUILD', false);
  })
}