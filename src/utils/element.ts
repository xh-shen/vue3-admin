/*
 * @Author: shen
 * @Date: 2021-01-22 20:30:11
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 16:38:08
 * @Description:
 */
import { ElNotification, ElMessage } from 'element-plus'
import { IMessageOptions } from 'element-plus/lib/el-message/src/types'
import { INotificationOptions } from 'element-plus/lib/el-notification/src/notification.type'

type Type = 'success' | 'warning' | 'info' | 'error' | ''

const notificationDefault: INotificationOptions = {
  title: '提示',
}

export const Notification = (message: string, type: Type = 'success', options?: INotificationOptions) => ElNotification(Object.assign({}, notificationDefault, options, { message, type }))

export const Message = (message: string, type: Type = 'success', options?: IMessageOptions) => ElMessage(Object.assign({}, options, { message, type }))
