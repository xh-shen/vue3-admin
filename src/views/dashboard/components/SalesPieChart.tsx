/*
 * @Author: shen
 * @Date: 2021-01-28 23:11:11
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 20:04:30
 * @Description:
 */
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { PieChart, ECharts, PieChartOption } from '@/charts'

export default defineComponent({
  name: 'SalesPieChart',
  setup() {
    let instance: ECharts
    const data = ref([
      {
        key1: '直达',
        key2: 335,
        key3: 123,
      },
      {
        key1: '营销广告',
        key2: 679,
        key3: 121,
      },
      {
        key1: '搜索引擎',
        key2: 153,
        key3: 234,
      },
      {
        key1: '百度',
        key2: 233,
        key3: 148,
      },
      {
        key1: '谷歌',
        key2: 451,
        key3: 251,
      },
    ])

    onMounted(() => {
      nextTick(() => {
        instance.setOption<PieChartOption>({
          legend: {
            orient: 'vertical',
            align: 'left',
            left: 0,
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, 70],
              itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
              },
              minShowLabelAngle: 1,
              encode: {
                itemName: 'key1',
                value: 'key2',
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                },
              },
              labelLine: {
                show: false,
              },
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: [110, 140],
              minShowLabelAngle: 1,
              itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
              },
              encode: {
                itemName: 'key1',
                value: 'key3',
              },
            },
          ],
        })
      })
    })
    return () => (
      <pro-card
        title="访问来源占比"
        headerBorder
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
        <PieChart data={data.value} getInstance={(ins) => (instance = ins)} style="height: 400px" />
      </pro-card>
    )
  },
})
