/*
 * @Author: shen
 * @Date: 2021-01-19 21:37:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 17:29:02
 * @Description:
 */
import { computed, defineComponent } from 'vue'
import { useInject } from '@/hooks/useContext'
import RightPanel from '@/components/RightPanel'
import Header from './components/Header'
import Sider from './components/Sider'
import Setting from './components/Setting'
import './index.scss'

export default defineComponent({
  name: 'Layout',
  setup() {
    const { collapse, menuTheme, breadCrumb, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout')
    const siderWidth = computed(() => (collapse.value ? '48px' : '200px'))

    return () => (
      <el-container class={[prefixCls, `${prefixCls}__${menuTheme.value}`]}>
        <el-aside width={siderWidth.value} style="transition: width 0.2s;" />
        <el-aside width={siderWidth.value} class={`${prefixCls}__aside`}>
          <Sider />
        </el-aside>
        <el-container>
          <el-header class={`${prefixCls}__header`}>
            <Header>
              {breadCrumb.value && (
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item to={{ path: '/' }}>控制台</el-breadcrumb-item>
                  <el-breadcrumb-item>图标</el-breadcrumb-item>
                </el-breadcrumb>
              )}
            </Header>
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
