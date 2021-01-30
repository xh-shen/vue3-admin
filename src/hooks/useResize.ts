/*
 * @Author: shen
 * @Date: 2021-01-29 09:52:55
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 12:15:27
 * @Description:
 */
import { onMounted, nextTick, onUnmounted, DeepReadonly, readonly, Ref, ref } from 'vue'
import { on, off } from '@/utils/dom'
import { rafThrottle } from '@/utils'

export interface ResizeHandler {
  (this: Window, e: WindowEventMap['resize']): any
}

export interface ResizeState {
  width: DeepReadonly<Ref<number>>
  height: DeepReadonly<Ref<number>>
}

export function useResize(handler: ResizeHandler | null = null): ResizeState {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  let cb: ResizeHandler = function(this: Window, e: WindowEventMap['resize']) {
    handler && handler.call(this, e)
    width.value = window.innerWidth
    height.value = window.innerHeight
  }
  cb = rafThrottle(cb)
  onMounted(() => {
    nextTick(() => {
      on(window, 'resize', cb as EventListenerOrEventListenerObject)
    })
  })
  onUnmounted(() => {
    off(window, 'resize', cb as EventListenerOrEventListenerObject)
  })
  return {
    width: readonly(width),
    height: readonly(height),
  }
}
