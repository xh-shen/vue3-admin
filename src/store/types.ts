/*
 * @Author: shen
 * @Date: 2021-01-23 21:56:40
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 10:58:10
 * @Description:
 */
import { User } from '@/interface/user'

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
