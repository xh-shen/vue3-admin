/*
 * @Author: shen
 * @Date: 2021-01-28 20:20:23
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 17:38:41
 * @Description:
 */
import { defineComponent, nextTick, onMounted, reactive } from 'vue'
import { BarLineChart, ECharts, BarLineChartOption } from '@/charts'
import { useInject } from '@/hooks/useContext'

const data = [
  { product: 'product', item1: 'Milk Tea', item2: 'Ma LiYa' },
  { x: '1月', y: 265, y1: 321 },
  { x: '2月', y: 1173, y1: 345 },
  { x: '3月', y: 779, y1: 532 },
  { x: '4月', y: 1170, y1: 123 },
  { x: '5月', y: 1014, y1: 565 },
  { x: '6月', y: 270, y1: 1241 },
  { x: '7月', y: 1083, y1: 234 },
  { x: '8月', y: 254, y1: 876 },
  { x: '9月', y: 342, y1: 456 },
  { x: '10月', y: 280, y1: 345 },
  { x: '11月', y: 551, y1: 134 },
  { x: '12月', y: 337, y1: 834 },
]

type ChartType = {
  data: object[]
}

export default defineComponent({
  name: 'SalesBarChart',
  setup() {
    let instance: ECharts
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('pages-dashboard__sales')
    const chart: ChartType = reactive({
      data: data.map((item) => Object.values(item)),
    })
    onMounted(() => {
      nextTick(() => {
        instance.setOption<BarLineChartOption>({
          grid: {
            top: '35',
            left: '50',
            right: '30',
            bottom: '20',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: 'rgba(0,0,0,.5)',
              },
            },
          },
          xAxis: {
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
          series: [
            {
              type: 'bar',
              barMaxWidth: 40,
            },
            {
              type: 'line',
            },
          ],
        })
      })
    })

    return () => (
      <pro-card
        title="销售额"
        headerBorder
        extra={<el-date-picker modelValue={['2021-01-20', '2021-02-10']} type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>}
        style="margin-bottom: 15px"
        class={prefixCls}
      >
        <el-row gutter={15}>
          <el-col {...{ lg: 18, md: 16, xs: 24 }}>
            <h3 class={`${prefixCls}-title`}>销售趋势</h3>
            <div class={`${prefixCls}-chart`}>
              <BarLineChart data={chart.data} getInstance={(ins) => (instance = ins)} />
            </div>
          </el-col>
          <el-col {...{ lg: 6, md: 8, xs: 24 }}>
            <h3 class={`${prefixCls}-title`}>门店销售排名</h3>
            <div class={`${prefixCls}-list`}>
              {[...Array(8)].map((_, index) => (
                <div class={`${prefixCls}-list-item`}>
                  <span class={`${prefixCls}-list-index`} style={{ color: index < 3 ? '#fff' : 'rgba(0,0,0,.85)', backgroundColor: index < 3 ? '#314659' : '#fafafa' }}>
                    {index + 1}
                  </span>
                  <span style="flex: 1">红旗街{index + 1}号门店</span>
                  <span>234,239</span>
                </div>
              ))}
            </div>
          </el-col>
        </el-row>
      </pro-card>
    )
  },
})
