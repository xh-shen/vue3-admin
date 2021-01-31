/*
 * @Author: shen
 * @Date: 2021-01-21 16:28:34
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 16:27:25
 * @Description:
 */
import { defineComponent } from 'vue'
import { useStore } from '@/hooks/useStore'
import { useRoute } from 'vue-router'
import { useInject } from '@/hooks/useContext'
import { Menu } from '@/interface/user'
import { midlinetoHump } from '@/utils'

function genMenuData(list: Menu[]) {
  const genTree = (id: string) => {
    const arr: any[] = []
    list
      .filter((item) => {
        return item.pid === id
      })
      .forEach((item) => {
        arr.push({
          ...item,
          children: genTree(item.id),
        })
      })
    return arr
  }
  return genTree('0')
}

function genMenuItem(item: any, prefixCls: string, iconType: any, language: any) {
  return (
    <el-menu-item
      index={item.path}
      v-slots={{
        title: () => <span class={`${prefixCls}-name`}>{item[`${midlinetoHump(language.value)}Title`]}</span>,
      }}
    >
      {item.icon && (
        <span class={`${prefixCls}-icon`}>
          <svg-icon icon-class={`${item.icon}-${iconType.value}`} />
        </span>
      )}
    </el-menu-item>
  )
}

function genMenuItemTree(data: any[], prefixCls: string, iconType: any, language: any) {
  return data.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <el-submenu
          index={item.path}
          v-slots={{
            title: () => (
              <>
                {item.icon && (
                  <span class={`${prefixCls}-icon`}>
                    <svg-icon icon-class={`${item.icon}-${iconType.value}`} />
                  </span>
                )}
                <span class={`${prefixCls}-name`}>{item[`${midlinetoHump(language.value)}Title`]}</span>
              </>
            ),
          }}
        >
          {genMenuItemTree(item.children, prefixCls, iconType, language)}
        </el-submenu>
      )
    }
    return genMenuItem(item, prefixCls, iconType, language)
  })
}

export default defineComponent({
  name: 'Menu',
  setup() {
    const route = useRoute()
    const { state } = useStore()
    const { iconType, collapse, language, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__sidermenu')
    const menuList = state.permission.menuList
    const MenuItem = genMenuItemTree(genMenuData(menuList), prefixCls, iconType, language)
    return () => (
      <el-menu class={prefixCls} collapse={collapse.value} collapse-transition={false} router defaultActive={route.path}>
        {MenuItem}
      </el-menu>
    )
  },
})
