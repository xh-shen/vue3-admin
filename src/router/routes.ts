/*
 * @Author: shen
 * @Date: 2021-01-19 21:22:17
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 19:15:18
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
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
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
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
        path: 'form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/form'),
      },
      {
        path: '/401',
        component: () => import(/* webpackChunkName: "401" */ '@/views/error/401'),
        meta: {
          title: '401',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404'),
    meta: {
      title: '404',
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  { path: '/:catchAll(.*)', redirect: '/404' },
]

export default routes
