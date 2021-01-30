/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 12:15:26
 * @Description:
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { ScatterChart, ScatterSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type ScatterChartOption = ChartOption<ScatterSeriesOption>

ChartFactory.use(ScatterChart)

const option: ScatterChartOption = {
  series: [{ type: 'scatter' }],
}

const ScatterChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<ScatterChartOption>,
  },
}

export default defineComponent({
  name: 'ScatterChart',
  props: ScatterChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
