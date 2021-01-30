/*
 * @Author: shen
 * @Date: 2021-01-28 16:19:53
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 16:19:54
 * @Description:
 */
import { mock, Random } from 'mockjs'
import { genUuid, genResponse } from './util'

const user = mock({
  email: Random.email(),
  'id|1-10': 1,
  realName: Random.cname(),
  roleName: 'admin',
  username: Random.first(),
})

export function userInfo() {
  return genResponse(200, user, '')
}
