/*
 * @Author: shen
 * @Date: 2021-01-30 20:09:33
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 17:12:41
 * @Description:
 */
import { defineComponent } from 'vue'
import { RadarChart, RadarChartOption } from '@/charts'
function genSeries() {
  const series = []
  for (let i = 1; i <= 28; i++) {
    series.push({
      name: '浏览器（数据纯属虚构）',
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 1,
      },
      emphasis: {
        areaStyle: {
          color: 'rgba(0,250,0,0.3)',
        },
      },
      data: [
        {
          value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
          name: i + 2000 + '',
        },
      ],
    })
  }
  return series
}
const options = {
  title: {
    text: '',
    subtext: '纯属虚构',
    top: 10,
    left: 10,
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: (function() {
      const list = []
      for (let i = 1; i <= 28; i++) {
        list.push(i + 2000 + '')
      }
      return list
    })(),
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: ['red', 'yellow'],
    calculable: true,
  },
  radar: {
    indicator: [
      { text: 'IE8-', max: 400 },
      { text: 'IE9+', max: 400 },
      { text: 'Safari', max: 400 },
      { text: 'Firefox', max: 400 },
      { text: 'Chrome', max: 400 },
    ],
  },
  series: genSeries(),
} as RadarChartOption
export default defineComponent({
  name: 'BrowserRadarChart',
  setup() {
    return () => (
      <pro-card
        title="浏览器占比变化"
        headerBorder
        style="margin-bottom: 15px"
        extra={
          <el-dropdown
            placement="bottom-end"
            v-slots={{
              dropdown: () => (
                <el-dropdown-menu>
                  <el-dropdown-item>操作1</el-dropdown-item>
                  <el-dropdown-item>操作2</el-dropdown-item>
                </el-dropdown-menu>
              ),
            }}
          >
            <svg-icon icon-class="more-fill"></svg-icon>
          </el-dropdown>
        }
      >
        <RadarChart data={[]} options={options} style="height: 400px" />
      </pro-card>
    )
  },
})
