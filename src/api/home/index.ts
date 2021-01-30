/*
 * @Author: shen
 * @Date: 2021-01-23 16:12:56
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 09:40:42
 * @Description:
 */
import request from '@/libs/axios'
import { User } from '@/interface/user'

export const getCount = () => request.get<User>('/home/count')
