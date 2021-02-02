/*
 * @Author: shen
 * @Date: 2021-01-31 12:48:56
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 13:52:00
 * @Description:
 */
import { Module } from 'vuex'
import { PermissionState } from '../types'
import { Menu } from '@/interface/user'
import { getMenu } from '@/api/user'
import { SET_MENU_LIST } from '../constants'

const dashboard: Menu = {
  id: '10086',
  pid: '0',
  path: '/dashboard',
  fullPath: '/dashboard',
  icon: 'dashboard',
  enTitle: 'Dashboard',
  zhCnTitle: '首页',
  name: 'Dashboard',
  meta: {
    keepAlive: true,
  },
}

const state: PermissionState = {
  home: dashboard,
  menuList: [],
}

const permission: Module<PermissionState, unknown> = {
  namespaced: true,
  state,
  actions: {
    async getMenuList({ commit }) {
      const { code, data, msg } = await getMenu()
      if (code === 200) {
        commit(SET_MENU_LIST, data)
      } else {
        throw new Error(msg)
      }
    },
  },
  mutations: {
    [SET_MENU_LIST](state: PermissionState, list: Menu[]) {
      state.menuList = [state.home, ...list]
    },
  },
}

export default permission
