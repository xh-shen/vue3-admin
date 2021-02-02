/*
 * @Author: shen
 * @Date: 2021-01-26 19:44:12
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 22:11:22
 * @Description:
 */
import { SizeType, ThemeType, LanguageType, IconType } from './types'
import variables from '@/assets/styles/variables.scss'

export interface Setting {
  size?: SizeType
  menuTheme?: ThemeType
  language?: LanguageType
  iconType?: IconType
  theme?: string
  sidebarLogo?: boolean
  tagsView?: boolean
  breadCrumb?: boolean
  collapse?: boolean
  keyValue?: number
}

const setting: Setting = {
  language: 'zh-cn',
  size: 'medium',
  menuTheme: 'dark',
  iconType: 'fill',
  theme: variables.colorPrimary,
  sidebarLogo: true,
  tagsView: true,
  breadCrumb: true,
  collapse: false,
  keyValue: 0,
}

export default setting
