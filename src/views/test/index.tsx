/*
 * @Author: shen
 * @Date: 2021-01-21 20:02:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 20:03:03
 * @Description:
 */

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    return () => {
      return <div class="test">我是测试页面</div>
    }
  },
})
