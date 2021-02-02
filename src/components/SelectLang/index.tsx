/*
 * @Author: shen
 * @Date: 2021-01-23 00:06:08
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 22:20:03
 * @Description:
 */

import { defineComponent } from 'vue'
import { useI18n } from '@/hooks/useI18n'
import { useInject } from '@/hooks/useContext'
import { Message } from '@/utils/element'

const list = [
  {
    lang: 'zh-cn',
    label: '简体中文',
    icon: '🇨🇳',
  },
  {
    lang: 'en',
    label: 'English',
    icon: '🇺🇸',
  },
]

export default defineComponent({
  name: 'SelectLang',
  setup() {
    const { locale } = useI18n()
    const { iconType, language, keyValue, u } = useInject()
    const onCommand = (command: string): void => {
      locale.value = command
      u('language', command)
      u('keyValue', (keyValue.value as number) + 1)
      Message('Switch Language Success')
    }
    return () => (
      <el-dropdown
        onCommand={onCommand}
        placement="bottom-end"
        v-slots={{
          dropdown: () => (
            <el-dropdown-menu>
              {list.map((item) => (
                <el-dropdown-item style="width: 150px" command={item.lang} key={item.lang} disabled={language.value === item.lang}>{`${item.icon} ${item.label}`}</el-dropdown-item>
              ))}
            </el-dropdown-menu>
          ),
        }}
      >
        <span style="cursor: pointer; font-size: 18px; display: block">
          <svg-icon icon-class={`lang-${iconType.value}`} />
        </span>
      </el-dropdown>
    )
  },
})
