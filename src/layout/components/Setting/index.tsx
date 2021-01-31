/*
 * @Author: shen
 * @Date: 2021-01-26 23:10:54
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 14:27:44
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { ThemeType, IconType } from '@/types'
import { useInject } from '@/hooks/useContext'
import { useI18n } from '@/hooks/useI18n'
import lightSvg from '@/assets/images/light.svg'
import dartSvg from '@/assets/images/dark.svg'
import setting, { Setting } from '@/setting'
import { sleep } from '@/utils'
import { Message } from '@/utils/element'
import ThemePicker from './ThemePicker'

interface MenuTheme {
  key: ThemeType
  url: any
  title: string
}

interface IconTypeOption {
  label: string
  value: IconType
}

const menuThemeList: MenuTheme[] = [
  {
    key: 'light',
    title: 'menuThemeLight', //多语言的key
    url: lightSvg,
  },
  {
    key: 'dark',
    title: 'menuThemeDark', //多语言的key
    url: dartSvg,
  },
]

const iconTypeList: IconTypeOption[] = [
  { label: 'iconStyleLine', value: 'line' },
  { label: 'iconStyleFill', value: 'fill' },
]

type SettingKeys = keyof Setting

export default defineComponent({
  name: 'Setting',
  setup() {
    const { t } = useI18n()
    const { menuTheme, iconType, sidebarLogo, tagsView, breadCrumb, u, getPrefixCls } = useInject()
    const loading = ref<boolean>(false)
    const prefixCls = getPrefixCls('layout__setting')

    const onChange = (type: any, value: string) => {
      u(type, value)
    }

    const onReset = async () => {
      loading.value = true
      await sleep(300)
      const resets: SettingKeys[] = ['menuTheme', 'theme', 'iconType', 'sidebarLogo', 'tagsView', 'breadCrumb']
      resets.forEach((key: SettingKeys) => onChange(key, setting[key] as string))
      loading.value = false
      Message('reset success')
    }

    return () => (
      <div class={prefixCls}>
        <div class={`${prefixCls}-item`}>
          <h1 class={`${prefixCls}-title`}>{t('setting.menuThemeTitle')}</h1>
          <div class={`${prefixCls}-content`}>
            <div class={`${prefixCls}-menu`}>
              {menuThemeList.map((item: MenuTheme) => {
                return (
                  <div class={`${prefixCls}-menu-item`} key={item.key} onClick={() => onChange('menuTheme', item.key)}>
                    {item.key !== menuTheme.value ? (
                      <el-tooltip content={t(`setting.${item.title}`)} placement="top">
                        <img src={item.url} alt={item.key} />
                      </el-tooltip>
                    ) : (
                      <img src={item.url} />
                    )}
                    <div style={{ display: item.key == menuTheme.value ? 'block' : 'none' }} class={`${prefixCls}-menu-selected`}>
                      <i class="el-icon-check"></i>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div class={`${prefixCls}-item`}>
          <h1 class={`${prefixCls}-title`}>{t('setting.themeTitle')}</h1>
          <div class={`${prefixCls}-content`}>
            <ThemePicker />
          </div>
        </div>
        <el-divider />
        <div class={`${prefixCls}-item`}>
          <div class={`${prefixCls}-content`}>
            <span class={`${prefixCls}--content-title`}>{t('setting.iconStyle')}</span>
            <el-select modelValue={iconType.value} size="mini" style="width: 90px" onChange={(value: string) => onChange('iconType', value)}>
              {iconTypeList.map((item) => (
                <el-option key={item.value} label={t(`setting.${item.label}`)} value={item.value} />
              ))}
            </el-select>
          </div>
        </div>
        <div class={`${prefixCls}-item`}>
          <div class={`${prefixCls}-content`}>
            <span class={`${prefixCls}--content-title`}>{t('setting.siderLogo')}</span>
            <el-switch modelValue={sidebarLogo.value} onChange={(value: string) => onChange('sidebarLogo', value)} />
          </div>
        </div>
        <div class={`${prefixCls}-item`}>
          <div class={`${prefixCls}-content`}>
            <span class={`${prefixCls}--content-title`}>{t('setting.tagsView')}</span>
            <el-switch modelValue={tagsView.value} onChange={(value: string) => onChange('tagsView', value)} />
          </div>
        </div>
        <div class={`${prefixCls}-item`}>
          <div class={`${prefixCls}-content`}>
            <span class={`${prefixCls}--content-title`}>{t('setting.breadCrumb')}</span>
            <el-switch modelValue={breadCrumb.value} onChange={(value: string) => onChange('breadCrumb', value)} />
          </div>
        </div>
        <div class={`${prefixCls}-reset`}>
          <el-button style="width: 100%" loading={loading.value} onClick={onReset}>
            {t('setting.reset')}
          </el-button>
        </div>
      </div>
    )
  },
})
