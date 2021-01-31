/*
 * @Author: shen
 * @Date: 2021-01-23 21:56:40
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 12:50:10
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
  menuList: Menu[]
}
