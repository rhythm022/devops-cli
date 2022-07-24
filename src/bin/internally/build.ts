import { devWebpack, buildWebpack, buildRollup } from '@/inedx'

/**
 * @description: webpack 开发
 * @param {*}
 * @return {*}
 */
export const webpackDevCommand = {
    version: '0.1.0',
    description: 'start webpack dev',
    command: 'start',
    action: devWebpack
}

/**
 * @description: webpack 构建
 * @param {*}
 * @return {*}
 */
 export const webpackBuildCommand = {
    version: '0.1.0',
    description: 'start webpack build',
    command: 'build',
    action: buildWebpack
}


/**
 * @description: rollup 构建
 * @param {*}
 * @return {*}
 */
export const rollupCommand = {
    version: '0.1.0',
    description: 'start rollup build',
    command: 'rollup:dev',
    action: buildRollup
}