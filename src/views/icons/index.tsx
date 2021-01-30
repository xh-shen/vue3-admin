/*
 * @Author: shen
 * @Date: 2021-01-21 20:02:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 16:05:40
 * @Description:
 */

import { defineComponent, ref } from 'vue'
import { useI18n } from '@/hooks/useI18n'
import { messages } from './lang'
import FullIcons from '@/components/FullIcons'

export default defineComponent({
  name: 'Icons',
  setup() {
    const visible = ref<boolean>(false)
    const { t } = useI18n(messages)
    const onSelect = () => {
      visible.value = true
    }
    return () => (
      <div>
        <el-button onClick={onSelect}>{t('icons.select')}</el-button>
        <el-divider>{t('icons.tip')}</el-divider>
        <FullIcons />
        <base-dialog
          title={t('icons.select')}
          v-model={visible.value}
          center
          before-close={() => {
            return true
          }}
          v-slots={{
            default: () => <FullIcons mode="select" />,
          }}
        />
      </div>
    )
  },
})
