/*
 * @Author: shen
 * @Date: 2021-01-19 21:04:48
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 15:01:46
 * @Description:
 */
import { defineComponent } from 'vue'
import CountSales from './components/CountSales'
import CountVisits from './components/CountVisits'
import CountPayments from './components/CountPayments'
import CountOperate from './components/CountOperate'
import SalesBarChart from './components/SalesBarChart'
import LineSearchChart from './components/LineSearchChart'
import SalesPieChart from './components/SalesPieChart'

import './index.scss'

const gutter = 15
const countColSpan = { lg: 6, md: 12, xs: 24 }
const colSpan = { lg: 12, md: 12, xs: 24 }
export default defineComponent({
  name: 'Dashboard',
  setup() {
    return () => (
      <div class="page-container">
        <scroll-container viewStyle={[{ 'overflow-x': 'hidden', width: 'calc(100% - 0px)' }]}>
          <el-row gutter={gutter}>
            <el-col {...countColSpan}>
              <CountSales />
            </el-col>
            <el-col {...countColSpan}>
              <CountVisits />
            </el-col>
            <el-col {...countColSpan}>
              <CountPayments />
            </el-col>
            <el-col {...countColSpan}>
              <CountOperate />
            </el-col>
          </el-row>
          <SalesBarChart />
          <el-row gutter={gutter}>
            <el-col {...colSpan}>
              <LineSearchChart />
            </el-col>
            <el-col {...colSpan}>
              <SalesPieChart />
            </el-col>
          </el-row>
        </scroll-container>
      </div>
    )
  },
})
