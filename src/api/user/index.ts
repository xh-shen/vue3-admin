/*
 * @Author: shen
 * @Date: 2021-01-23 16:12:56
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 09:40:42
 * @Description:
 */
import request from '@/libs/axios'
import { User, LoginParams } from '@/interface/user'

interface LoginData {
  token: string
}

export const login = (params: LoginParams) => request.post<LoginData>('/user/login', params)
export const userInfo = () => request.get<User>('/user/info')
