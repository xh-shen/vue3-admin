import { computed } from 'vue'
/*
 * @Author: shen
 * @Date: 2021-01-26 19:08:05
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 22:18:51
 * @Description:
 */
import { provide, reactive, readonly, inject, toRefs, ToRefs, Ref } from 'vue'
import { SizeType, ThemeType, LanguageType, IconType } from '@/types'
import setting, { Setting } from '@/setting'
import variables from '@/assets/styles/variables.scss'
import { local } from '@/utils/storage'
import { midlinetoHump } from '@/utils'

type ToRefSetting = ToRefs<Setting>

type SettingProps = keyof Setting

type Update = (property: SettingProps, value: any) => void

type GetPrefixCls = (suffixCls?: string) => string

const ConfigStateSymbol = Symbol('Config state provider identifier')
const ConfigUpdateSymbol = Symbol('Config update provider identifier')

export function useProvide() {
  const state: Setting = reactive({
    language: local.get<LanguageType>('language') || setting.language,
    size: local.get<SizeType>('size') || setting.size,
    menuTheme: local.get<ThemeType>('menuTheme') || setting.menuTheme,
    iconType: local.get<IconType>('iconType') || setting.iconType,
    theme: local.get<string>('theme') || setting.theme,
    sidebarLogo: local.get<boolean>('sidebarLogo') || setting.sidebarLogo,
    tagsView: local.get<boolean>('tagsView') || setting.tagsView,
    breadCrumb: local.get<boolean>('breadCrumb') || setting.breadCrumb,
    collapse: local.get<boolean>('collapse') || setting.collapse,
    keyValue: setting.keyValue,
  })

  provide<ToRefSetting>(ConfigStateSymbol, toRefs(readonly(state)))

  const update: Update = (property: SettingProps, value: any) => {
    state[property] = value
    local.set(property, value)
  }

  provide<Update>(ConfigUpdateSymbol, update)
}

export function useInject() {
  const { collapse, menuTheme, language, size, iconType, theme, tagsView, sidebarLogo, breadCrumb, keyValue } = inject<ToRefSetting>(ConfigStateSymbol) as ToRefSetting
  const u = inject<Update>(ConfigUpdateSymbol) as Update
  const getPrefixCls: GetPrefixCls = (suffixCls?: string) => {
    return `${JSON.parse(variables.prefix)}${JSON.parse(variables.splicing)}${suffixCls}`
  }
  const languageHump = computed(() => midlinetoHump(language?.value as string))
  return {
    collapse: collapse as Ref<boolean>,
    menuTheme: menuTheme as Ref<ThemeType>,
    language: language as Ref<LanguageType>,
    languageHump: languageHump as Ref<string>,
    size: size as Ref<SizeType>,
    iconType: iconType as Ref<IconType>,
    theme: theme as Ref<string>,
    tagsView: tagsView as Ref<boolean>,
    sidebarLogo: sidebarLogo as Ref<boolean>,
    breadCrumb: breadCrumb as Ref<boolean>,
    keyValue: keyValue as Ref<number>,
    getPrefixCls,
    u,
  }
}
