/*
 * @Author: shen
 * @Date: 2021-01-21 16:06:21
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 20:20:53
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { useInject } from '@/hooks/useContext'
import logo from '@/assets/images/logo.png'
import logoBig from '@/assets/images/logo_big.png'

export default defineComponent({
  name: 'Logo',
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props) {
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__logo')
    return () => (
      <div class={prefixCls}>
        <router-link to="/">
          <img src={props.collapse ? logo : logoBig} alt="logo" />
        </router-link>
      </div>
    )
  },
})
