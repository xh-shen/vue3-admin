/*
 * @Author: shen
 * @Date: 2021-01-23 15:41:08
 * @LastEditors: shen
 * @LastEditTime: 2021-02-05 00:07:09
 * @Description:
 */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { requestConfig, CODE_MESSAGE } from './config'
import { Notification } from '@/utils/element'

const instance: AxiosInstance = axios.create(requestConfig)

const errorHandler = (error: AxiosError) => {
  const { response } = error
  const errorMsg = response?.data?.msg || CODE_MESSAGE[response?.status || 500]
  Notification(errorMsg, 'error')
  return Promise.reject(error)
}

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, errorHandler)

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  const { data } = response
  // console.log(data)
  // 请求异常提示信息
  if (data.code !== 200) {
    Notification(data.msg, 'error')
  }
  return response
}, errorHandler)

export default instance
