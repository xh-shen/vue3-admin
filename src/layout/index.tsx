/*
 * @Author: shen
 * @Date: 2021-01-19 21:37:06
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 16:49:04
 * @Description:
 */
import { computed, defineComponent, KeepAlive, Transition, Suspense } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useInject } from '@/hooks/useContext'
import RightPanel from '@/components/RightPanel'
import Header from './components/Header'
import Sider from './components/Sider'
import TagsView from './components/TagsView'
import Setting from './components/Setting'
import './index.scss'

export default defineComponent({
  name: 'Layout',
  setup() {
    const { collapse, tagsView, menuTheme, breadCrumb, getPrefixCls } = useInject()
    const route = useRoute()
    const prefixCls = getPrefixCls('layout')
    const siderWidth = computed(() => (collapse.value ? '48px' : '208px'))

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
            {tagsView.value && <TagsView />}
            <div class={`${prefixCls}__view`} style={{ height: `calc(100vh - ${tagsView.value ? 110 : 68}px` }}>
              <RouterView
                key={route.path}
                v-slots={{
                  default: ({ Component: Comp }: any) => {
                    return (
                      <Transition name="fade-transform" mode="out-in">
                        {/* <KeepAlive include={['Dashboard']}> */}
                        {Comp}
                        {/* <component is={Comp} /> */}
                        {/* </KeepAlive> */}
                      </Transition>
                    )
                  },
                }}
              />
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
