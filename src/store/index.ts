/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 08:54:22
 * @Description:
 */
import { App, InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { AppState, UserState } from './types'
import modules from './modules'
import getters from './getters'

export type State = {
  app: AppState
  user: UserState
}
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  getters,
  modules,
})

export function setupStore(app: App<Element>) {
  app.use(store, key)
}

export default store
