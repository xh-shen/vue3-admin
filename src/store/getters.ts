/*
 * @Author: shen
 * @Date: 2021-01-23 21:45:07
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 11:54:32
 * @Description:
 */
import { State } from './index'

const getters = {
  userInfo: (state: State) => state.user.userInfo,
  isAuthentication: (state: State) => state.user.isAuthentication,
}

type GettersKeys = typeof getters
export type Getters = {
  [K in keyof GettersKeys]: ReturnType<GettersKeys[K]>
}

export default getters
