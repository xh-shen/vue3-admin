/*
 * @Author: shen
 * @Date: 2021-01-23 21:53:41
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 11:25:47
 * @Description:
 */
import { Module } from 'vuex'
import { UserState } from '../types'
import { SET_TOKEN, SET_USER_INFO, SET_IS_AUTHENTICATION } from '../constants'
import { User, LoginParams } from '@/interface/user'
import { login, userInfo } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/token'

const state: UserState = {
  token: getToken(),
  userInfo: {},
  isAuthentication: false,
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  state,
  actions: {
    async login({ commit }, params: LoginParams) {
      const { code, data } = await login(params)
      if (code === 200) {
        commit(SET_TOKEN, data.token)
        setToken(data.token)
        return true
      } else {
        return false
      }
    },
    async getInfo({ commit }) {
      const { code, data, msg } = await userInfo()
      if (code === 200) {
        commit(SET_USER_INFO, data)
      } else {
        throw new Error(msg)
      }
    },
    async setAuthentication({ commit }, val: boolean) {
      commit(SET_IS_AUTHENTICATION, val)
    },
    async logout({ dispatch }) {
      // 此处可以使用服务端退出
      await dispatch('resetToken')
      return true
    },
    async resetToken({ commit }) {
      commit(SET_TOKEN, '')
      commit(SET_IS_AUTHENTICATION, false)
      commit(SET_USER_INFO, {})
      removeToken()
    },
  },
  mutations: {
    [SET_TOKEN]: (state: UserState, token) => {
      state.token = token
    },
    [SET_USER_INFO](state: UserState, info: User) {
      state.userInfo = info
    },
    [SET_IS_AUTHENTICATION](state: UserState, val: boolean) {
      state.isAuthentication = val
    },
  },
}

export default user
