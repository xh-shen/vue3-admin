/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 17:07:29
 * @Description: 柱形折线图
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { BarChart, BarSeriesOption, LineChart, LineSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type BarLineChartOption = ChartOption<BarSeriesOption | LineSeriesOption>

ChartFactory.use(BarChart, LineChart)

const option: BarLineChartOption = {
  series: [{ type: 'bar' }, { type: 'line' }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
    },
  },
  xAxis: { type: 'category' },
  yAxis: {},
}

const BarLineChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<BarLineChartOption>,
  },
}

export default defineComponent({
  name: 'BarLineChart',
  props: BarLineChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
