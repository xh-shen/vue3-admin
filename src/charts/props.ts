/*
 * @Author: shen
 * @Date: 2021-01-29 20:45:14
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 13:28:18
 * @Description:
 */
import { PropType } from 'vue'
import { ECharts } from './ChartFactory'
export default {
  data: {
    type: Object as PropType<object>,
    required: true,
  },
  getInstance: {
    type: Function as PropType<(instance: ECharts) => void>,
  },
} as const
