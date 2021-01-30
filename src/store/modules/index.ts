/*
 * @Author: shen
 * @Date: 2021-01-23 21:48:49
 * @LastEditors: shen
 * @LastEditTime: 2021-01-23 22:56:59
 * @Description:
 */
import path from 'path'

const file = require.context('./', true, /\.ts/)
const modules: { [prop: string]: any } = {}
file.keys().forEach((key) => {
  const name = path.basename(key, '.ts')
  if (name !== 'index') {
    modules[name] = file(key).default || file(key)
  }
})

export default modules
