/*
 * @Author: shen
 * @Date: 2021-01-19 21:11:52
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 18:45:17
 * @Description:
 */

import { defineComponent } from 'vue'
import { useProvide } from '@/hooks/useContext'

export default defineComponent({
  name: 'App',
  setup() {
    useProvide()
    return () => {
      return (
        <div style="height: 100%">
          <router-view />
        </div>
      )
    }
  },
})
