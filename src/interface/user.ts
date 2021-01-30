/*
 * @Author: shen
 * @Date: 2021-01-24 09:01:12
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 10:58:54
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
