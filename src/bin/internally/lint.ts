import { execEslint} from '@/inedx'

/**
 * @description: eslint 检测
 * @param {*}
 * @return {*}
 */
export const lintCommand = {
    version: '0.1.0',
    description: 'start eslint and fix code',
    command: 'eslint',
    action: execEslint
}