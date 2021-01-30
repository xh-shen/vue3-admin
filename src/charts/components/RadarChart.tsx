/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 20:09:19
 * @Description: 雷达图
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { RadarChart, RadarSeriesOption } from 'echarts/charts'
import { VisualMapComponent, VisualMapComponentOption } from 'echarts/components'
import Chart from './Chart'
import ChartProps from '../props'

export type RadarChartOption = ChartOption<RadarSeriesOption | VisualMapComponentOption>

ChartFactory.use(RadarChart, VisualMapComponent)

const option: RadarChartOption = {
  series: [{ type: 'radar' }],
}

const RadarChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<RadarChartOption>,
  },
}

export default defineComponent({
  name: 'RadarChart',
  props: RadarChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
