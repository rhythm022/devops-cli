/*
 * @Author: Cookie
 * @Date: 2021-07-17 17:52:22
 * @LastEditors: Cookie
 * @LastEditTime: 2021-07-17 22:07:46
 * @Description:
 */

const rollup = require('rollup');
import { inputOptions, outputOptions } from "./rollup.config";
import { loggerTiming } from '@/util'
import ora from "ora";

export const buildRollup = async () => {
  loggerTiming('ROLLUP BUILD');

  const spinner = ora('ROLLUP Building...\n')

  spinner.start();
  try{
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    spinner.succeed('ROLLUP BUILD SUCCESS!');
  }catch(error){
    spinner.fail('ROLLUP BUILD FAILED!');
  }

  loggerTiming('ROLLUP BUILD', false);

}

