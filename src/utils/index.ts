/*
 * @Author: shen
 * @Date: 2021-01-20 10:13:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 16:23:55
 * @Description:
 */

import { AnyFunction } from '@/types'

/**
 * @description 延迟方法，异步函数
 * @param {number} delay 延迟的时间，单位 毫秒
 * @returns
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function rafThrottle<T extends AnyFunction<any>>(fn: T): AnyFunction<void> {
  let locked = false
  return (...args: any[]) => {
    if (locked) return
    locked = true
    window.requestAnimationFrame(() => {
      fn.apply(this, args)
      locked = false
    })
  }
}

/**
 * @description 驼峰转中横线
 * @param {string} str
 * @returns
 */
export function humpToMidline(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * @description 中横线转驼峰
 * @param {string} str
 * @returns
 */
export function midlinetoHump(str: string) {
  return str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
}
