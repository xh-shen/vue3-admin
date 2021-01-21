/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-19 22:35:42
 * @Description: entry file
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import './permission'
import './assets/styles/index.scss'

createApp(App)
  .use(Element3)
  .use(store)
  .use(router)
  .mount('#app')
