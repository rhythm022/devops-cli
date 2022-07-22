import { devWebpack, buildWebpack, buildRollup } from '@/inedx'

/**
 * @description: webpack 构建
 * @param {*}
 * @return {*}
 */
export const webpackCommand = {
    version: '0.1.0',
    description: 'start webpack build',
    command: 'webpack',
    action: () => {
        const { NODE_ENV = 'development' } = process.env

        if (NODE_ENV === 'development') return devWebpack()

        buildWebpack()
    }
}


/**
 * @description: rollup 构建
 * @param {*}
 * @return {*}
 */
export const rollupCommand = {
    version: '0.1.0',
    description: 'start rollup build',
    command: 'rollup',
    action: buildRollup
}