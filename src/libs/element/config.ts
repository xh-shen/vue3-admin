/*
 * @Author: shen
 * @Date: 2021-01-22 20:24:53
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 18:44:56
 * @Description:
 */

import { ConfigElement } from './types'
import setting from '@/setting'
import { SizeType } from '@/types'

const elementConfig: ConfigElement = {
  /**
   * 尺寸
   */
  size: (localStorage.getItem('size') as SizeType) || setting.size,

  /**
   * 层级
   */
  zIndex: 2000,
}

export default elementConfig
