/*
 * @Author: shen
 * @Date: 2021-01-28 23:11:11
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 12:08:44
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { LineChart } from '@/charts'

export default defineComponent({
  name: 'LineSearchChart',
  setup() {
    const data = ref([
      ['product', 'Milk Tea', 'SHEN'],
      ['2015', 43.3, 12.2],
      ['2016', 83.1, 54.3],
      ['2017', 86.4, 12.3],
      ['2018', 72.4, 33.2],
    ])
    return () => (
      <pro-card
        title="线上热门搜索"
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
        <LineChart
          data={data.value}
          options={{
            series: [{ type: 'line' }, { type: 'line' }],
            legend: {
              show: false,
            },
          }}
          style="height: 300px"
        />
      </pro-card>
    )
  },
})
