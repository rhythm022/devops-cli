import inquirer from '@/inquirer';

const { initGit } = inquirer

/**
 * @description: 初始化 git 信息
 * @param {*}
 * @return {*}
 */
export const gitInitCommand = {
    version: '0.1.0',
    description: 'git init',
    command: 'git init',
    action: initGit
}