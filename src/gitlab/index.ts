/*
 * @Author: Cookie
 * @Date: 2021-07-25 21:34:07
 * @LastEditors: Cookie
 * @LastEditTime: 2021-08-08 00:34:05
 * @Description:
 */

import { getToken } from './user'
import { loggerError, loggerSuccess, getDirPath } from '@/util'
import { loadFile, writeFile } from '@/util/file'

const verify = () => {

}

/**
 * @description: 初始化 Git 信息
 * @param {string} gitUrl
 * @param {string} username
 * @param {string} password
 * @return {*}
 */
const gitLabInit = async (gitUrl: string, username: string, password: string) => {
  if (username && password) {
    try {
      const { access_token } = await getToken(gitUrl, username, password)
      writeFile('.gitLabConfig', '.default.gitlab.config.json', {
        "GIT_Lab_URL": gitUrl,
        "GIT_Lab_TOKEN": access_token
      })
      loggerSuccess('Login Successful!')
    } catch (error) {
      loggerError(error as string)
    }
  }
}


export {
  gitLabInit,
}