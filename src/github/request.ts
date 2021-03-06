/*
 * @Author: Cookie
 * @LastEditors: Cookie
 * @LastEditTime: 2021-08-13 16:37:30
 * @Description: request 模块
 */
import { loggerError } from '@/util';
import request from 'request'
const qs = require("qs");

interface IMethodV {
  url: string
  params?: object
  query?: object
}

const GET = async <T>({ url, query = {} }: IMethodV) => {
  const sendUrl = `${url}?${qs.stringify(query)}`;
  try {
    return new Promise<T>((resolve, reject) => {
      request({
        url: sendUrl,
        method: "GET",
        json: true,
        headers: {
          "content-type": "application/json",
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": "j30-cli-App",
        },
      }, (error, response, body) => {
        if (!error && body) {
          resolve(body)
        } else {
          reject(error)
        }
      });
    })
  } catch (error) {
    loggerError(error as string)
    throw (error);
  }
}

export {
  GET,
}