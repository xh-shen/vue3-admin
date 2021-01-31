/*
 * @Author: shen
 * @Date: 2021-01-22 20:48:51
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 23:06:03
 * @Description:
 */

import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import ElementLocale from 'element-plus/lib/locale'
import { local } from '@/utils/storage'
import { LanguageType } from '@/types'
import config from '@/config'
import messages from '@/lang'
import setting from '@/setting'

const i18n = createI18n({
  legacy: false,
  locale: local.get<LanguageType>('language') || setting.language,
  fallbackLocale: config.enLocale,
  messages,
})

export function setupI18n(app: App<Element>): void {
  ElementLocale.i18n(i18n.global.t)
  app.use(i18n)
}

export default i18n
