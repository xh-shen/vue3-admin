/*
 * @Author: shen
 * @Date: 2021-01-23 16:20:30
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 20:22:11
 * @Description:
 */

export function genUuid() {
  let uuid = ''
  for (let i = 1; i <= 32; i++) {
    const n = Math.floor(Math.random() * 16.0).toString(16)
    uuid += n
    if (i == 8 || i == 12 || i == 16 || i == 20) uuid += '-'
  }
  return uuid
}

export function genResponse(code: number, data: any, msg: string) {
  return { code, data, msg }
}
