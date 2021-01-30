/*
 * @Author: shen
 * @Date: 2021-01-28 23:11:11
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 12:39:32
 * @Description:
 */
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { BarChart, ECharts, BarChartOption } from '@/charts'

export default defineComponent({
  name: 'SalesPieChart',
  setup() {
    let instance: ECharts
    const data = ref([
      ['product', 'Milk Tea', 'SHEN'],
      ['2015', 43.3, 12.2],
      ['2016', 83.1, 54.3],
      ['2017', 86.4, 12.3],
      ['2018', 72.4, 33.2],
    ])
    setTimeout(() => {
      data.value = [
        ['product', 'Milk Tea', 'SHEN'],
        ['2015', 1, 12.2],
        ['2016', 14, 54.3],
        ['2017', 12, 12.3],
        ['2018', 72.4, 2],
      ]
    }, 2000)

    onMounted(() => {
      nextTick(() => {
        instance.setOption<BarChartOption>({
          series: [{ type: 'bar' }, { type: 'bar' }],
        })
      })
    })
    return () => (
      <pro-card
        title="销售额类别占比"
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
        <div style="height: 300px">
          <BarChart data={data.value} getInstance={(ins) => (instance = ins)} />
        </div>
      </pro-card>
    )
  },
})
