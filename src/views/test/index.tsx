/*
 * @Author: shen
 * @Date: 2021-01-21 20:02:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 16:18:57
 * @Description:
 */

import { defineComponent } from 'vue'
import { useStore } from '@/hooks/useStore'

export default defineComponent({
  name: 'Test',
  setup() {
    const { state, dispatch } = useStore()

    const onClick = () => {
      dispatch('app/setAppCount', ++state.app.count)
    }

    return () => (
      <div class="test">
        我是测试页面{state.app.count} <el-button onClick={onClick}>+1</el-button>
      </div>
    )
  },
})
