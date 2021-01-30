/*
 * @Author: shen
 * @Date: 2021-01-23 14:08:54
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 20:45:24
 * @Description:
 */
// 引入mockjs
import Mock, { mock } from 'mockjs'
// 引入模板函数类
import { login, userInfo } from './user'

// 设置延时
Mock.setup({
  timeout: 400,
})

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
mock(/\/api\/user\/login/, 'post', login)
mock(/\/api\/user\/info/, 'get', userInfo)
