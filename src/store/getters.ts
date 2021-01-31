/*
 * @Author: shen
 * @Date: 2021-01-23 21:45:07
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 17:33:01
 * @Description:
 */
import { Menu } from '@/interface/user'
import { State } from './index'

interface MenuPathData {
  [key: string]: Menu
}

const getters = {
  userInfo: (state: State) => state.user.userInfo,
  isAuthentication: (state: State) => state.user.isAuthentication,
  menuPathData: (state: State) => {
    const mapData: MenuPathData = {}
    state.permission.menuList.forEach((item) => (mapData[item.path] = { ...item }))
    return mapData
  },
  menuPaths: (state: State) => state.permission.menuList.map((item) => item.path),
}

type GettersKeys = typeof getters
export type Getters = {
  [K in keyof GettersKeys]: ReturnType<GettersKeys[K]>
}

export default getters
