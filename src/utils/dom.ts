/*
 * @Author: shen
 * @Date: 2021-01-29 09:19:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 09:27:58
 * @Description:
 */

export const on = function(element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture = false): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

export const off = function(element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture = false): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}
