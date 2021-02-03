/*
 * @Author: shen
 * @Date: 2021-01-19 21:47:20
 * @LastEditors: shen
 * @LastEditTime: 2021-02-03 10:29:10
 * @Description:
 */

import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import setting from '@/setting'
import { getToken } from './utils/token'
import { local } from '@/utils/storage'
import { midlinetoHump } from '@/utils'
import config from '@/config'

const whiteList = ['/login', '/404']
const authWhite = ['/401', '/redirect']

const setPageTitle = (route: any) => {
  const menu = store.getters.menuPathData[route.path]
  if (menu) {
    const lang = midlinetoHump((local.get('language') || setting.language) as string)
    document.title = menu[`${lang}Title`] + ' - ' + config.title
  } else {
    document.title = route.meta?.title ? route.meta?.title + ' - ' + config.title : config.title
  }
}

router.beforeEach(async (to, _, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const isAuthentication = store.getters.isAuthentication
      if (isAuthentication) {
        const menuPaths = store.getters.menuPaths.concat(authWhite)
        if (menuPaths.some((item: string) => to.path.startsWith(item))) {
          next()
        } else {
          next({ path: '/401', replace: true })
        }
      } else {
        try {
          await store.dispatch('user/getInfo')
          await store.dispatch('user/setAuthentication', true)
          await store.dispatch('permission/getMenuList')
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  setPageTitle(to)
  NProgress.done()
})
