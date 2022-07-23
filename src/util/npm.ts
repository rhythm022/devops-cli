/*
 * @Author: Cookie
 * @Description:
 */
import { loggerError, loggerInfo, loggerWarring, getDirPath } from '@/util';
import latestVersion from 'latest-version';
import shelljs from 'shelljs'

const packageInfo = require('../../package.json');

const parseVersion = (ver: string) => {
  return Number(ver.split('.').toString())
}

export const checkVersion = async () => {
  const latestVer = await latestVersion('@boty-design/fe-cli');// todo
  if (parseVersion(latestVer) > parseVersion(packageInfo.version)) {
    loggerWarring(`The current version is the :  ${latestVer}`)
  } else {
    loggerInfo('The current version is the latest:')
  }
}

export const existNpm = async (packageName: string) => {
  try {
    const latestVer = await latestVersion(packageName);
    return latestVer
  } catch (error) {
    loggerError(error as string)
    process.exit(1)
  }
}

export const npmInstall = async (packageName: string) => {
  try {
    shelljs.exec(`yarn add ${packageName}`, { cwd: getDirPath() });
  } catch (error) {
    loggerError(error as string)
    process.exit(1)
  }
}
