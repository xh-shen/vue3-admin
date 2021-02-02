/*
 * @Author: shen
 * @Date: 2021-01-31 13:03:37
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 10:06:53
 * @Description:
 */
import { computed, defineComponent, ref, watchEffect, TransitionGroup } from 'vue'
import { useInject } from '@/hooks/useContext'
import { useStore } from '@/hooks/useStore'
import { useRoute } from 'vue-router'
import { Menu } from '@/interface/user'

interface Breadcrumb {
  path?: string
  title?: string
  enTitle?: string
  zhCnTitle?: string
}

function findParent(menu: Menu, menuList: Menu[]) {
  const arr = [menu]
  let paraent: Menu | undefined = { ...menu }
  while ((paraent = menuList.find((item) => item.id === paraent?.pid))) {
    arr.unshift(paraent)
  }
  return arr
}

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const { getters, state } = useStore()
    const { breadCrumb, languageHump, getPrefixCls } = useInject()

    const breadcrumbList = ref<Breadcrumb[]>([])
    const prefixCls = getPrefixCls('layout__breadcrumb')
    const path = computed(() => route.path)

    const homeMenu = computed(() => state.permission.home)

    watchEffect(() => {
      if (path.value === homeMenu.value.path) {
        breadcrumbList.value = []
        return
      }
      const menu = getters.menuPathData[path.value]
      if (!menu) {
        breadcrumbList.value = [
          {
            path: path.value,
            title: route.meta?.title || 'no-name',
          },
        ]
        return
      }
      breadcrumbList.value = findParent(menu, state.permission.menuList)
    })

    return () => (
      <div class={prefixCls}>
        {breadCrumb.value && (
          <el-breadcrumb separator="/">
            <TransitionGroup name="breadcrumb">
              <el-breadcrumb-item key={homeMenu.value.path} to={{ path: homeMenu.value.path }}>
                {homeMenu.value[`${languageHump.value}Title`]}
              </el-breadcrumb-item>
              {breadcrumbList.value.map((item: any) => (
                <el-breadcrumb-item key={item.path}>{item[`${languageHump.value}Title`] || item.title}</el-breadcrumb-item>
              ))}
            </TransitionGroup>
          </el-breadcrumb>
        )}
      </div>
    )
  },
})
