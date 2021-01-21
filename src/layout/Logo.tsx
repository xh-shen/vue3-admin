/*
 * @Author: shen
 * @Date: 2021-01-21 16:06:21
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 19:54:21
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import logo from '@/assets/images/logo.png'
import logoBig from '@/assets/images/logo_big.png'
import config from '@/config'
const { prefixCls } = config

const namespaceCls = `${prefixCls}-layout-logo`

export default defineComponent({
  name: 'Logo',
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={namespaceCls}>
          <img src={props.collapse ? logo : logoBig} alt="logo" />
        </div>
      )
    }
  },
})
