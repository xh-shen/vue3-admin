/*
 * @Author: shen
 * @Date: 2021-01-19 21:22:17
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 20:04:04
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
import Dashboard from '@/views/dashboard'
import Login from '@/views/login'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '@/views/test'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

export default routes
