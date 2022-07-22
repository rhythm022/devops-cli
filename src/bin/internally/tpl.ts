import inquirer from '@/inquirer';

const { addTpl, selectTpl } = inquirer

/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
export const addTplCommand = {
    version: '0.1.0',
    description: 'add tpl',
    command: 'add tpl',
    action: addTpl
}


/**
* @description: clone 模板到本地
* @param {*}
* @return {*}
*/
export const selectTplCommand = {
    version: '0.1.0',
    description: 'init tpl',
    command: 'init tpl',
    action: selectTpl
}