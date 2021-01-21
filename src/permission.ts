/*
 * @Author: shen
 * @Date: 2021-01-19 21:47:20
 * @LastEditors: shen
 * @LastEditTime: 2021-01-19 21:54:11
 * @Description:
 */

import router from './router'
import { getToken } from './utils/token'

router.beforeEach((to, from, next) => {
  const isAuthenticated = getToken()
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
