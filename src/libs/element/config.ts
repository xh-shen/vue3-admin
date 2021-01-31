/*
 * @Author: shen
 * @Date: 2021-01-22 20:24:53
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 23:07:09
 * @Description:
 */

import { ConfigElement } from './types'
import setting from '@/setting'
import { SizeType } from '@/types'
import { local } from '@/utils/storage'

const elementConfig: ConfigElement = {
  /**
   * 尺寸
   */
  size: local.get<SizeType>('size') || setting.size,

  /**
   * 层级
   */
  zIndex: 2000,
}

export default elementConfig
