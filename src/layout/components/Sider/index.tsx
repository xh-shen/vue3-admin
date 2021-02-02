/*
 * @Author: shen
 * @Date: 2021-01-31 14:12:15
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 14:37:49
 * @Description:
 */
import { defineComponent } from 'vue'
import { useInject } from '@/hooks/useContext'
import Logo from './Logo'
import SiderMenu from './Menu'

export default defineComponent({
  name: 'Slider',
  setup() {
    const { sidebarLogo, collapse, getPrefixCls, u } = useInject()
    const prefixCls = getPrefixCls('layout')
    const onCollapse = () => {
      u('collapse', !collapse.value)
    }
    return () => (
      <>
        {sidebarLogo.value && <Logo />}
        <SiderMenu />
        <div onClick={onCollapse} class={`${prefixCls}__collapse`}>
          <span id="sidebar-trigger">
            <svg-icon icon-class={collapse.value ? 'menu-unfold-line' : 'menu-fold-line'} />
          </span>
        </div>
      </>
    )
  },
})
