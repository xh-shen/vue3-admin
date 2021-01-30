/*
 * @Author: shen
 * @Date: 2021-01-25 21:44:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 13:07:52
 * @Description:
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScrollContainer',
  inheritAttrs: false,
  setup(props, { slots, attrs }) {
    return () => <el-scrollbar {...attrs}>{slots.default && slots.default()}</el-scrollbar>
  },
})
