/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 11:43:57
 * @Description: entry file
 */
import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupElement } from './libs/element'
import { setupI18n } from './libs/i18n'
import { setupGlobCom } from './components'
import App from './App'
import './permission'
import './assets/icons'
import './assets/styles/index.scss'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mock')
}

const app = createApp(App)
setupElement(app)
setupI18n(app)
setupGlobCom(app)
setupRouter(app)
setupStore(app)
app.mount('#app')
