/*
 * @Author: shen
 * @Date: 2021-01-29 13:05:35
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 13:29:44
 * @Description:
 */
import { ECharts, ec as echarts } from './ChartFactory'
import LineChart, { LineChartOption } from './components/LineChart'
import BarChart, { BarChartOption } from './components/BarChart'
import PieChart, { PieChartOption } from './components/PieChart'
import BarLineChart, { BarLineChartOption } from './components/BarLineChart'
import RadarChart, { RadarChartOption } from './components/RadarChart'
import ScatterChart, { ScatterChartOption } from './components/ScatterChart'

export { echarts, LineChart, BarChart, PieChart, BarLineChart, RadarChart, ScatterChart }

// eslint-disable-next-line prettier/prettier
export type { ECharts, LineChartOption, BarChartOption, PieChartOption, BarLineChartOption, RadarChartOption, ScatterChartOption }
