/*
 * @Author: shen
 * @Date: 2021-01-20 10:13:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-20 10:13:10
 * @Description:
 */

/**
 * @description 延迟方法，异步函数
 * @param {number} delay 延迟的时间，单位 毫秒
 * @returns
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
