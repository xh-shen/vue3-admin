/*
 * @Author: shen
 * @Date: 2021-01-21 16:28:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 20:11:15
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import config from '@/config'
const { prefixCls } = config

const namespaceCls = `${prefixCls}-layout-sidermenu`

export default defineComponent({
  name: 'SiderMenu',
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props) {
    return () => {
      return (
        <el-menu class={namespaceCls} collapse={props.collapse} collapse-transition={false} router>
          <el-menu-item
            index="/dashboard"
            v-slots={{
              title: () => <span>首页</span>,
            }}
          >
            <i class="el-icon-orange"></i>
          </el-menu-item>
          <el-submenu
            index="test"
            v-slots={{
              title: () => (
                <>
                  <i class="el-icon-bangzhu"></i>
                  <span>导航一</span>
                </>
              ),
            }}
          >
            <el-menu-item
              index="/test"
              v-slots={{
                title: () => <span>选项一</span>,
              }}
            ></el-menu-item>
          </el-submenu>
        </el-menu>
      )
    }
  },
})
