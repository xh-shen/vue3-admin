/*
 * @Author: shen
 * @Date: 2021-01-31 12:48:56
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 14:38:13
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
  icon: 'dashboard',
  enTitle: 'Dashboard',
  zhCnTitle: '首页',
}

const state: PermissionState = {
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
      state.menuList = [dashboard, ...list]
    },
  },
}

export default permission
