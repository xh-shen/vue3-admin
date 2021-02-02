/*
 * @Author: shen
 * @Date: 2021-01-24 09:01:12
 * @LastEditors: shen
 * @LastEditTime: 2021-02-01 08:55:21
 * @Description:
 */
export interface LoginParams {
  username: string
  password: string
}

export interface User {
  email?: string
  id?: number
  realName?: string
  roleName?: string
  username?: string
  [key: string]: any
}

export interface Menu {
  id: string
  pid: string
  path: string
  icon: string
  enTitle: string
  zhCnTitle: string
  children?: Menu[]
  [key: string]: any
}
