/*
 * @Author: shen
 * @Date: 2021-01-19 21:04:48
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 20:33:42
 * @Description:
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return () => {
      return <div class="dashboard">我是dashboard页面</div>
    }
  },
})
