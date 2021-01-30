/*
 * @Author: shen
 * @Date: 2021-01-23 22:44:38
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 11:10:16
 * @Description:
 */

import { useStore as baseUseStore } from 'vuex'
import { key, State } from '@/store'
import { Getters } from '@/store/getters'

interface UseStore {
  state: State
  getters: Getters
  commit: any
  dispatch: any
}

export function useStore(): UseStore {
  const store = baseUseStore<State>(key)
  const { state, getters, dispatch, commit }: UseStore = store
  return {
    state,
    getters,
    commit,
    dispatch,
  }
}
