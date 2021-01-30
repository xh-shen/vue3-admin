/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 17:01:58
 * @Description: 饼图
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type PieChartOption = ChartOption<PieSeriesOption>

ChartFactory.use(PieChart)

const option: PieChartOption = {
  series: [{ type: 'pie' }],
  tooltip: {
    trigger: 'item',
  },
}

const PieChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<PieChartOption>,
  },
}

export default defineComponent({
  name: 'PieChart',
  props: PieChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
