/*
 * @Author: shen
 * @Date: 2021-01-23 10:36:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 23:04:31
 * @Description:
 */
import { useI18n as baseUseI18n } from 'vue-i18n'

type Message = { [prop: string]: { [prop: string]: string | Record<string, any> } }

export const useI18n = (messages?: Message) => {
  const { t, mergeLocaleMessage, locale } = baseUseI18n()
  if (messages) {
    for (const key in messages) {
      mergeLocaleMessage(key, messages[key])
    }
  }
  return { t, locale }
}
