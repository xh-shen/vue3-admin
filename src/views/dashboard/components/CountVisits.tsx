/*
 * @Author: shen
 * @Date: 2021-01-28 20:20:23
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 20:19:44
 * @Description:
 */
import { defineComponent } from 'vue'
import { LineChart, LineChartOption } from '@/charts'
import CountProCard from './CountProCard'

const data = [
  { x: '2021-01-25', y: 7 },
  { x: '2021-01-26', y: 5 },
  { x: '2021-01-27', y: 4 },
  { x: '2021-01-28', y: 2 },
  { x: '2021-01-29', y: 4 },
  { x: '2021-01-30', y: 7 },
  { x: '2021-01-31', y: 5 },
  { x: '2021-02-01', y: 6 },
  { x: '2021-02-02', y: 5 },
  { x: '2021-02-03', y: 9 },
  { x: '2021-02-04', y: 6 },
  { x: '2021-02-05', y: 3 },
  { x: '2021-02-06', y: 1 },
  { x: '2021-02-07', y: 5 },
  { x: '2021-02-08', y: 3 },
  { x: '2021-02-09', y: 6 },
  { x: '2021-02-10', y: 5 },
]

const options: LineChartOption = {
  legend: {
    show: false,
  },
  grid: {
    top: '10',
    left: '5',
    right: '5',
    bottom: '0',
  },
  tooltip: {
    axisPointer: {
      type: 'none',
    },
  },
  color: ['#8d55de'],
  xAxis: {
    show: false,
    boundaryGap: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      areaStyle: {
        color: '#8d55de',
        opacity: 1,
      },
      // areaStyle: {
      //   opacity: 0.8,
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //     {
      //       offset: 0,
      //       color: 'rgba(128, 255, 165)',
      //     },
      //     {
      //       offset: 1,
      //       color: 'rgba(1, 191, 236)',
      //     },
      //   ]),
      // },
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      clip: false,
      smooth: true, // true 为平滑曲线，false为直线
    },
  ],
}

export default defineComponent({
  name: 'CountVisits',
  setup() {
    return () => (
      <CountProCard meta="访问量" footerMeta="日访问量" total={3452} footerTotal={1123} contentStyle={{ height: '100%' }} tip="访问量">
        <LineChart data={data.map((item) => Object.values(item))} options={options} />
      </CountProCard>
    )
  },
})
