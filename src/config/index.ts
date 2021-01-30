/*
 * @Author: shen
 * @Date: 2021-01-19 22:03:38
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 20:24:29
 * @Description:
 */

interface Config {
  title: string
  zhCnLocale: string
  enLocale: string
  prefixUrl: string
  baseUrl: string
  timeout: number
}

const config: Config = {
  title: 'Vue Element Admin',
  zhCnLocale: 'zh-cn',
  enLocale: 'en',
  prefixUrl: '/api',
  baseUrl: '',
  timeout: 5000,
}

export default config
