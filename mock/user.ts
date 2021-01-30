/*
 * @Author: shen
 * @Date: 2021-01-23 15:37:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 20:45:04
 * @Description:
 */
import { mock, Random } from 'mockjs'
import { genUuid, genResponse } from './util'

const loginUsers = [
  {
    id: 1,
    username: 'guest',
    password: '123456',
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
  },
]

const user = mock({
  email: Random.email(),
  'id|1-10': 1,
  realName: Random.cname(),
  roleName: 'admin',
  username: Random.first(),
})

export function login({ body }) {
  const params = JSON.parse(body)
  const user = loginUsers.find((item) => params.username === item.username)
  if (user && user.password === params.password) {
    const data = { token: genUuid() }
    return genResponse(200, data, '登录成功')
  }
  return genResponse(401, null, '用户名或密码错误')
}

export function userInfo() {
  return genResponse(200, user, '')
}
