/*
 * @Author: shen
 * @Date: 2021-01-21 16:37:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 20:44:01
 * @Description:
 */

import { defineComponent, getCurrentInstance } from 'vue'
import logo from '@/assets/images/logo.png'
import config from '@/config'
import { removeToken } from '@/utils/token'
const { prefixCls } = config

const namespaceCls = `${prefixCls}-layout-header`

export default defineComponent({
  name: 'Header',
  setup() {
    const { proxy } = getCurrentInstance()!

    const onCommand = (command: string) => {
      switch (command) {
        case 'logout':
          removeToken()
          proxy!.$router.replace('/login')
          break
      }
    }

    return () => {
      return (
        <el-header class={namespaceCls}>
          <div style="flex: 1 1 0%;"></div>
          <div>
            <el-dropdown onCommand={onCommand}>
              <span class={`${namespaceCls}-active-user`}>
                <span class={`${namespaceCls}-active-user-avatar`}>
                  <img src={logo} alt="" />
                </span>
                shen<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
      )
    }
  },
})
