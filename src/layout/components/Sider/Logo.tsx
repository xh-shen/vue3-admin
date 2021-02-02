/*
 * @Author: shen
 * @Date: 2021-01-21 16:06:21
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 18:39:52
 * @Description:
 */
import { defineComponent } from 'vue'
import { useInject } from '@/hooks/useContext'
import logo from '@/assets/images/logo.png'
import config from '@/config'
import classNames from 'classnames'

export default defineComponent({
  name: 'Logo',
  setup() {
    const { collapse, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__logo')
    return () => {
      const logoCls = classNames(prefixCls, {
        'is-collapse': collapse.value,
      })
      return (
        <div class={logoCls}>
          <router-link to="/">
            <img src={logo} alt="logo" />
            {!collapse.value && <span class={`${prefixCls}-text`}>{config.title}</span>}
          </router-link>
        </div>
      )
    }
  },
})
