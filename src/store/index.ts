/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 14:37:07
 * @Description:
 */
import { App, InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { AppState, UserState, PermissionState } from './types'
import modules from './modules'
import getters from './getters'

export type State = {
  app: AppState
  user: UserState
  permission: PermissionState
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
