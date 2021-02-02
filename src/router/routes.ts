/*
 * @Author: shen
 * @Date: 2021-01-19 21:22:17
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 10:57:40
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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
        meta: {
          title: '首页',
          keepAlive: true,
        },
      },
      {
        path: 'icons',
        name: 'Icons',
        component: () => import(/* webpackChunkName: "icons" */ '@/views/icons'),
        meta: {
          title: '图标',
          keepAlive: true,
        },
      },
      {
        path: 'table/simple',
        name: 'TableSimple',
        component: () => import(/* webpackChunkName: "tableSimple" */ '@/views/table/simple'),
        meta: {
          title: '简单表格',
          keepAlive: true,
        },
      },
      {
        path: 'table/query',
        name: 'QueryTable',
        component: () => import(/* webpackChunkName: "tableQuery" */ '@/views/table/query'),
        meta: {
          title: '查询表格',
          keepAlive: true,
        },
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/form'),
        meta: {
          title: '表单',
          keepAlive: true,
        },
      },
      {
        path: '401',
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
