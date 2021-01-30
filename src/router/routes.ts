/*
 * @Author: shen
 * @Date: 2021-01-19 21:22:17
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 19:24:10
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
import Dashboard from '@/views/dashboard'
import Login from '@/views/login'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect'),
      },
    ],
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'icons',
        component: () => import(/* webpackChunkName: "icons" */ '@/views/icons'),
      },
      {
        path: 'table/simple',
        component: () => import(/* webpackChunkName: "tableSimple" */ '@/views/table/simple'),
      },
      {
        path: 'table/query',
        component: () => import(/* webpackChunkName: "tableQuery" */ '@/views/table/query'),
      },
      {
        path: 'test',
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
