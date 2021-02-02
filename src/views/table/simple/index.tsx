/*
 * @Author: shen
 * @Date: 2021-01-21 20:02:34
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 21:32:31
 * @Description:
 */

import { defineComponent } from 'vue'

const data = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  },
]

export default defineComponent({
  name: 'SimpleTable',
  setup() {
    return () => (
      <el-table data={data} border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    )
  },
})
