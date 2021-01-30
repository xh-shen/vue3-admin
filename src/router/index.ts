/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 20:55:53
 * @Description:
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
