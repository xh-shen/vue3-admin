/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 14:47:28
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type LineChartOption = ChartOption<LineSeriesOption>

ChartFactory.use(LineChart)

const option: LineChartOption = {
  series: [{ type: 'line' }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
    },
  },
}

const LineChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<LineChartOption>,
  },
}

export default defineComponent({
  name: 'LineChart',
  props: LineChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
