/*
 * @Author: shen
 * @Date: 2021-01-29 19:28:40
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 19:53:08
 * @Description:
 */
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { ECBasicOption as BasicOption } from 'echarts/types/dist/shared'
import {
  DataZoomComponent,
  DataZoomComponentOption,
  LegendComponent,
  LegendComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  TitleComponent,
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components'
import { isObject } from 'lodash-es'

export type ChartOption<T> = echarts.ComposeOption<T | DataZoomComponentOption | LegendComponentOption | DatasetComponentOption | TitleComponentOption | GridComponentOption | TooltipComponentOption>
export type ECharts = echarts.EChartsType
export type ECBasicOption = BasicOption

export const ec = echarts

export const defaultOption = {
  legend: {},
  tooltip: {
    backgroundColor: 'rgba(255,255,255, 0.7)',
    extraCssText: 'box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);',
    textStyle: {
      color: '#333',
      fontSize: 12,
    },
  },
  color: ['#3AA1FF', '#36CBCB', '#F2637B', '#975FE5', '#FBD437', '#1890FF', '#13C2C2', 'rgb(245, 34, 45)', 'rgb(250, 173, 20)', 'rgb(47, 84, 235)', 'rgb(114, 46, 209)'],
}

export default class ChartFactory {
  static use(...args: any[]) {
    echarts.use([...args, DataZoomComponent, LegendComponent, DatasetComponent, TitleComponent, GridComponent, TooltipComponent, CanvasRenderer])
  }

  static getEcharts() {
    return echarts
  }

  static create(dom: HTMLElement, ...args: any[]): ECharts {
    const instance: ECharts = echarts.init(dom)
    instance.setOption(defaultOption)
    if (args[0] && isObject(args[0])) {
      instance.setOption({ ...(args[0] as ECBasicOption) })
    }
    if (args[1] && isObject(args[1])) {
      instance.setOption({ ...(args[1] as ECBasicOption) })
    }
    return instance
  }
}
