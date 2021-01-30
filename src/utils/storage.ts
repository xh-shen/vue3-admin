/*
 * @Author: shen
 * @Date: 2021-01-29 08:23:41
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 09:13:46
 * @Description: 本地存储简单封装
 */

type Key = 'localStorage' | 'sessionStorage'

function storageFactory(key: Key) {
  const store = window[key]
  return {
    set(key: string, value: any) {
      store.setItem(key, JSON.stringify(value))
    },
    get<T>(key: string): T {
      return (store.getItem(key) ? JSON.parse(store.getItem(key) as string) : undefined) as T
    },
    remove(key: string) {
      store.removeItem(key)
    },
  }
}

export const local = storageFactory('localStorage')
export const session = storageFactory('sessionStorage')
