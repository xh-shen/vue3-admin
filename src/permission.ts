/*
 * @Author: shen
 * @Date: 2021-01-19 21:47:20
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 19:10:24
 * @Description:
 */

import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import { getToken } from './utils/token'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const isAuthentication = store.getters.isAuthentication
      if (isAuthentication) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          await store.dispatch('user/setAuthentication', true)
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

router.afterEach(() => {
  NProgress.done()
})
