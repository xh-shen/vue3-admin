/*
 * @Author: shen
 * @Date: 2021-01-19 21:04:48
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 20:25:29
 * @Description:
 */
import { defineComponent } from 'vue'
import CountSales from './components/CountSales'
import CountVisits from './components/CountVisits'
import CountPayments from './components/CountPayments'
import CountOperate from './components/CountOperate'
import SalesBarChart from './components/SalesBarChart'
import LineSearchChart from './components/SearchLineChart'
import SalesPieChart from './components/SalesPieChart'
import BrowserRadarChart from './components/BrowserRadarChart'

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
              <BrowserRadarChart />
            </el-col>
            <el-col {...colSpan}>
              <SalesPieChart />
            </el-col>
          </el-row>
          <LineSearchChart />
        </scroll-container>
      </div>
    )
  },
})
