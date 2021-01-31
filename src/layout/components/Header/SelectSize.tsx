/*
 * @Author: shen
 * @Date: 2021-01-31 13:03:58
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 13:04:10
 * @Description:
 */

import { defineComponent, getCurrentInstance, nextTick } from 'vue'
import { useInject } from '@/hooks/useContext'
import { useRoute, useRouter } from 'vue-router'
import { Message } from '@/utils/element'

const list: string[] = ['default', 'medium', 'small', 'mini']

export default defineComponent({
  name: 'SelectSize',
  setup() {
    const { iconType, size, u } = useInject()
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
                <el-dropdown-item style="width: 150px" command={item} key={item} disabled={size.value === item}>
                  {item}
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
