/*
 * @Author: shen
 * @Date: 2021-01-19 21:50:47
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 15:39:44
 * @Description:
 */
import Cookies from 'js-cookie'

export const TOKEN_KEY = 'token'

export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

export const setToken = (val: string) => {
  return Cookies.set(TOKEN_KEY, val)
}

export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}
