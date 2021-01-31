/*
 * @Author: shen
 * @Date: 2021-01-31 13:03:37
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 17:46:17
 * @Description:
 */
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { useInject } from '@/hooks/useContext'
import { useStore } from '@/hooks/useStore'
import { useRoute, RouteMeta } from 'vue-router'
import { Menu } from '@/interface/user'
import { midlinetoHump } from '@/utils'

interface Breadcrumb {
  title?: string
  enTitle?: string
  zhCnTitle?: string
}

const DASHBOARD_PATH = '/dashboard'

function find(menu: Menu, menuList: Menu[]) {
  const arr = [menu]
  let paraent: Menu | undefined = { ...menu }
  while ((paraent = menuList.find((item) => item.id === paraent?.pid))) {
    arr.unshift(paraent)
  }
  return arr.map((item) => ({
    enTitle: item.enTitle,
    zhCnTitle: item.zhCnTitle,
  }))
}

function getRouteOrigin(route: RouteMeta, menu: Menu, menuList: Menu[]) {
  if (route.path === DASHBOARD_PATH) {
    return []
  }
  if (!menu) {
    return [
      {
        title: route.meta?.title,
      },
    ]
  }
  if (menu.pid === '0') {
    return [
      {
        enTitle: menu.enTitle,
        zhCnTitle: menu.zhCnTitle,
      },
    ]
  }

  return find(menu, menuList)
}

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const { getters, state } = useStore()
    const { breadCrumb, language, getPrefixCls } = useInject()
    const breadcrumbList = ref<Breadcrumb[]>([])
    const prefixCls = getPrefixCls('layout__breadcrumb')
    const dashboardMenu = getters.menuPathData[DASHBOARD_PATH] as any
    console.log(dashboardMenu)
    const dashboardTitle = computed(() => dashboardMenu[`${midlinetoHump(language.value)}Title`])
    const path = computed(() => route.path)

    watchEffect(() => {
      const originList = getRouteOrigin(route, getters.menuPathData[path.value], state.permission.menuList)
      breadcrumbList.value = originList
    })

    return () => (
      <div class={prefixCls}>
        {breadCrumb.value && (
          <el-breadcrumb separator="/">
            <el-breadcrumb-item to={{ path: '/' }}>{dashboardTitle.value}</el-breadcrumb-item>
            {breadcrumbList.value.map((item: any) => (
              <el-breadcrumb-item>{item[`${midlinetoHump(language.value)}Title`] || item.title}</el-breadcrumb-item>
            ))}
          </el-breadcrumb>
        )}
      </div>
    )
  },
})
