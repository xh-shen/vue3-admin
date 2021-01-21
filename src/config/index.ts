/*
 * @Author: shen
 * @Date: 2021-01-19 22:03:38
 * @LastEditors: shen
 * @LastEditTime: 2021-01-19 22:09:24
 * @Description:
 */

interface Config {
  title: string
  prefixUrl: string
  prefixCls: string
  baseUrl: string
}

const config: Config = {
  title: 'vue3 element admin',
  prefixCls: 's-el',
  prefixUrl: '/api',
  baseUrl: '/api',
}

export default config
