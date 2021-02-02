/*
 * @Author: shen
 * @Date: 2021-01-31 13:03:58
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 23:16:42
 * @Description:
 */

import { defineComponent, getCurrentInstance, nextTick } from 'vue'
import { useInject } from '@/hooks/useContext'
import { useRoute, useRouter } from 'vue-router'
import { Message } from '@/utils/element'

const list: any[] = [
  {
    value: '',
    label: 'default',
  },
  {
    value: 'medium',
    label: 'medium',
  },
  {
    value: 'small',
    label: 'small',
  },
  {
    value: 'mini',
    label: 'mini',
  },
]

export default defineComponent({
  name: 'SelectSize',
  setup() {
    const { iconType, size, keyValue, u } = useInject()
    const { replace } = useRouter()
    const route = useRoute()
    const globalProperties = getCurrentInstance()?.appContext?.config?.globalProperties
    const refreshView = () => {
      nextTick(() => {
        replace({
          path: '/redirect' + route.fullPath,
        })
      })
    }

    const onCommand = (command: string): void => {
      u('size', command)
      u('keyValue', (keyValue.value as number) + 1)

      // eslint-disable-next-line
      const { $ELEMENT } = globalProperties!
      $ELEMENT.size = command
      refreshView()
      Message('Switch Size Success')
    }

    return () => (
      <el-dropdown
        onCommand={onCommand}
        placement="bottom"
        v-slots={{
          dropdown: () => (
            <el-dropdown-menu>
              {list.map((item) => (
                <el-dropdown-item style="width: 150px" command={item.value} key={item.value} disabled={size.value === item.value}>
                  {item.label}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          ),
        }}
      >
        <span style="cursor: pointer; font-size: 20px; display: block">
          <svg-icon icon-class={`font-${iconType.value}`} />
        </span>
      </el-dropdown>
    )
  },
})
