/*
 * @Author: shen
 * @Date: 2021-01-19 21:37:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 09:01:50
 * @Description:
 */
import { computed, defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import { local } from '@/utils/storage.ts'
import RightPanel from '@/components/RightPanel'
import SiderMenu from './SiderMenu'
import HeaderRight from './HeaderRight'
import Setting from './Setting'
import Logo from './Logo'
import './index.scss'

const localCollapse = localStorage.getItem('collapse') === '1' ? true : false

export default defineComponent({
  name: 'Layout',
  setup() {
    const { collapse, menuTheme, sidebarLogo, breadCrumb, getPrefixCls, u } = useInject()
    const prefixCls = getPrefixCls('layout')
    const siderWidth = computed(() => (collapse.value ? '48px' : '200px'))
    const onCollapse = () => {
      u('collapse', !collapse.value)
    }
    return () => (
      <el-container class={[prefixCls, `${prefixCls}__${menuTheme.value}`]}>
        <el-aside width={siderWidth.value} />
        <el-aside width={siderWidth.value} class={`${prefixCls}__aside`}>
          {sidebarLogo.value && <Logo collapse={collapse.value} />}
          <SiderMenu collapse={collapse.value} />
          <div onClick={onCollapse} class={`${prefixCls}__collapse`}>
            <span id="sidebar-trigger">
              <svg-icon icon-class={collapse.value ? 'menu-unfold-line' : 'menu-fold-line'} />
            </span>
          </div>
        </el-aside>
        <el-container>
          <el-header class={`${prefixCls}__header`}>
            <div style="flex: 1 1 0%;">
              {breadCrumb.value && (
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item to={{ path: '/' }}>控制台</el-breadcrumb-item>
                  <el-breadcrumb-item>图标</el-breadcrumb-item>
                </el-breadcrumb>
              )}
            </div>
            <HeaderRight />
          </el-header>
          <el-main class={`${prefixCls}__main`}>
            <div class={`${prefixCls}__view`} style="height: calc(100vh - 68px);">
              <router-view />
            </div>
          </el-main>
        </el-container>
        <RightPanel>
          <Setting />
        </RightPanel>
      </el-container>
    )
  },
})
