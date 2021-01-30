import { AxiosRequestConfig } from 'axios'
/*
 * @Author: shen
 * @Date: 2021-01-23 15:41:08
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 19:01:53
 * @Description:
 */
import instance from './instance'
import { RequestInstance, Response } from './types'

const request: RequestInstance = {
  get: async function<T>(url: string, config?: AxiosRequestConfig) {
    const { data } = await instance.get<Response<T>>(url, config)
    return data
  },
  post: async function<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    const { data: postData } = await instance.post<Response<T>>(url, data, config)
    return postData
  },
}

export default request
