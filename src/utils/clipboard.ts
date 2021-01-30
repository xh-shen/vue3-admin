/*
 * @Author: shen
 * @Date: 2021-01-24 16:33:50
 * @LastEditors: shen
 * @LastEditTime: 2021-01-25 13:20:53
 * @Description:
 */
import { Message } from './element'
import Clipboard from 'clipboard'

export default function handleClipboard(text: string, event: MouseEvent) {
  const clipboard = new Clipboard(event.target as HTMLElement, {
    text: () => text,
  }) as any
  clipboard.on('success', () => {
    Message(`${text} copied 🎉`)
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    Message('Copy failed', 'error')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
