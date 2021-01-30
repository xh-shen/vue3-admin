/*
 * @Author: shen
 * @Date: 2021-01-28 20:12:20
 * @LastEditors: shen
 * @LastEditTime: 2021-01-29 12:14:13
 * @Description:
 */
import { defineComponent } from 'vue'
import CountProCard from './CountProCard'
export default defineComponent({
  name: 'CountSales',
  setup() {
    return () => (
      <CountProCard meta="总销售额" footerMeta="总销售额" total={126560} footerTotal={12423} prefix="¥ " tip="总销售额">
        <div style="display: inline-block; margin-right: 22px">
          <span>周同比</span>
          <span style="margin-left: 8px">12%</span>
          <span style="display: inline-block; font-size: 12px; color: #f5222d; margin-left: 8px; transform: scale(0.7)">
            <svg-icon icon-class="triangle-fill" />
          </span>
        </div>
        <div style="display: inline-block">
          <span>日同比</span>
          <span style="margin-left: 8px">11%</span>
          <span style="display: inline-block; font-size: 12px; color: #52c41a; margin-left: 8px; transform: scale(0.7)">
            <svg-icon icon-class="triangle-fill" rotate={180} />
          </span>
        </div>
      </CountProCard>
    )
  },
})
