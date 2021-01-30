/*
 * @Author: shen
 * @Date: 2021-01-23 18:12:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 19:02:32
 * @Description:
 */

import { AxiosRequestConfig } from 'axios'

export interface Response<T> {
  code: number
  data: T
  msg: string
}

export interface RequestInstance {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>>
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<Response<T>>
  delete?: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>>
  head?: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>>
  options?: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>>
  put?: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<Response<T>>
  patch?: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<Response<T>>
}
