/*
 * @Author: shen
 * @Date: 2021-01-23 09:41:16
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 09:52:06
 * @Description:
 */
import config from '@/config'
import enLocale from './en'
import zhLocale from './zh'

export const messages = {
  [config.zhCnLocale]: zhLocale,
  [config.enLocale]: enLocale,
}
