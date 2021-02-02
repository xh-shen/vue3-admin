/*
 * @Author: shen
 * @Date: 2021-01-26 19:46:28
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 22:46:09
 * @Description:
 */
export type SizeType = 'mini' | 'small' | 'medium' | undefined

export type ThemeType = 'dark' | 'light'

export type LanguageType = 'en' | 'zh-cn'

export type IconType = 'line' | 'fill'

export type AnyFunction<T> = (...args: any[]) => T

export interface VisitedViews {
  path: string
  enTitle?: string
  zhCnTitle?: string
  title?: string
}
