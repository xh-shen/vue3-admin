/*
 * @Author: shen
 * @Date: 2021-01-19 21:37:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 19:49:20
 * @Description:
 */
import { computed, defineComponent, ref } from 'vue'
import Logo from './Logo'
import SiderMenu from './SiderMenu'
import Header from './Header'
import config from '@/config'
import './index.scss'
const { prefixCls } = config

const namespaceCls = `${prefixCls}-layout`

const headerStyle = {
  height: '48px',
  lineHeight: '48px',
  width: '100%',
}

export default defineComponent({
  name: 'Layout',
  setup() {
    const collapse = ref(false)
    const siderWidth = computed(() => (collapse.value ? '48px' : '200px'))
    const onCollapse = () => {
      collapse.value = !collapse.value
    }
    return () => {
      return (
        <el-container class={namespaceCls}>
          <el-aside width={siderWidth.value} />
          <el-aside width={siderWidth.value} class={`${namespaceCls}-aside`}>
            <Logo collapse={collapse.value} />
            <SiderMenu collapse={collapse.value} />
            <div onClick={onCollapse} class={`${namespaceCls}-collapse`}>
              <span id="sidebar-trigger">{collapse.value ? <i class="el-icon-s-unfold" /> : <i class="el-icon-s-fold" />}</span>
            </div>
          </el-aside>
          <el-container>
            <el-header style={headerStyle} />
            <Header
              style={{
                ...headerStyle,
                zIndex: 9,
                width: `calc(100% - ${siderWidth.value})`,
              }}
            />
            <el-main>
              <router-view />
            </el-main>
          </el-container>
        </el-container>
      )
    }
  },
})
