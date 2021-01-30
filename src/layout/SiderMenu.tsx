/*
 * @Author: shen
 * @Date: 2021-01-21 16:28:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 20:21:09
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useInject } from '@/hooks/useContext'

export default defineComponent({
  name: 'SiderMenu',
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props) {
    const route = useRoute()
    const { iconType, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__sidermenu')
    return () => (
      <el-menu class={prefixCls} collapse={props.collapse} collapse-transition={false} router defaultActive={route.path}>
        <el-menu-item
          index="/dashboard"
          v-slots={{
            title: () => <span class={`${prefixCls}-name`}>控制台</span>,
          }}
        >
          <span class={`${prefixCls}-icon`}>
            <svg-icon icon-class={`dashboard-${iconType.value}`} />
          </span>
        </el-menu-item>
        <el-menu-item
          index="/icons"
          v-slots={{
            title: () => <span class={`${prefixCls}-name`}>图标</span>,
          }}
        >
          <span class={`${prefixCls}-icon`}>
            <svg-icon icon-class={`icon-${iconType.value}`} />
          </span>
        </el-menu-item>
        <el-submenu
          index="/table"
          v-slots={{
            title: () => (
              <>
                <span class={`${prefixCls}-icon`}>
                  <svg-icon icon-class={`table-${iconType.value}`} />
                </span>
                <span class={`${prefixCls}-name`}>表格</span>
              </>
            ),
          }}
        >
          <el-menu-item
            index="/table/simple"
            v-slots={{
              title: () => <span class={`${prefixCls}-name`}>简单表格</span>,
            }}
          ></el-menu-item>
          <el-menu-item
            index="/table/query"
            v-slots={{
              title: () => <span class={`${prefixCls}-name`}>查询表格</span>,
            }}
          ></el-menu-item>
        </el-submenu>
        <el-submenu
          index="/test1"
          v-slots={{
            title: () => (
              <>
                <span class={`${prefixCls}-icon`}>
                  <svg-icon icon-class={`menu-${iconType.value}`} />
                </span>
                <span class={`${prefixCls}-name`}>一级菜单</span>
              </>
            ),
          }}
        >
          <el-submenu
            index="/test111"
            v-slots={{
              title: () => (
                <>
                  <span class={`${prefixCls}-name`}>二级菜单-1</span>
                </>
              ),
            }}
          >
            <el-menu-item
              index="/test"
              v-slots={{
                title: () => <span class={`${prefixCls}-name`}>三级菜单-1</span>,
              }}
            ></el-menu-item>
            <el-menu-item
              index="/test"
              v-slots={{
                title: () => <span class={`${prefixCls}-name`}>三级菜单-2</span>,
              }}
            ></el-menu-item>
          </el-submenu>
          <el-menu-item
            index="/test"
            v-slots={{
              title: () => <span class={`${prefixCls}-name`}>二级菜单-2</span>,
            }}
          ></el-menu-item>
        </el-submenu>
      </el-menu>
    )
  },
})
