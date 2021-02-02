/*
 * @Author: shen
 * @Date: 2021-01-23 21:56:40
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 11:51:43
 * @Description:
 */
import { User, Menu } from '@/interface/user'

// app module
export interface AppState {
  name: string
  count: number
}

//user module
export interface UserState {
  userInfo: User
  isAuthentication: boolean
  token: string | undefined
}

//permission module
export interface PermissionState {
  home: Menu
  menuList: Menu[]
}

// tagsView module
export interface VisitedViews {
  path: string
  title?: string
  [key: string]: any
}

export interface TagsViewState {
  visitedViews: VisitedViews[]
  cachedViews: string[]
}
