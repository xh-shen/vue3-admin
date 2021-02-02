/*
 * @Author: shen
 * @Date: 2021-01-23 21:53:41
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 08:17:17
 * @Description:
 */
import { AppState } from '../types'
import { SET_APP_NAME, SET_APP_COUNT } from '../constants'
import { Module } from 'vuex'

const state: AppState = {
  name: 'Vue Element Admin',
  count: 1,
}

const app: Module<AppState, unknown> = {
  namespaced: true,
  state,
  actions: {
    setAppName({ commit }, name: string) {
      commit(SET_APP_NAME, name)
    },
    setAppCount({ commit }, count: number) {
      commit(SET_APP_COUNT, count)
    },
  },
  mutations: {
    [SET_APP_NAME](state: AppState, name: string) {
      state.name = name
    },
    [SET_APP_COUNT](state: AppState, count: number) {
      state.count = count
    },
  },
}

export default app
