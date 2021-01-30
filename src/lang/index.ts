/*
 * @Author: shen
 * @Date: 2021-01-22 21:03:46
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 09:57:03
 * @Description:
 */
import config from '@/config'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from './en'
import zhLocale from './zh'

export default {
  [config.enLocale]: {
    el: elementEnLocale.el,
    ...enLocale,
  },
  [config.zhCnLocale]: {
    el: elementZhLocale.el,
    ...zhLocale,
  },
}
