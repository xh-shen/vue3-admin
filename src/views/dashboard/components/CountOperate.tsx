/*
 * @Author: shen
 * @Date: 2021-01-28 20:22:42
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 15:28:15
 * @Description:
 */
import { defineComponent } from 'vue'
import { useInject } from '@/hooks/useContext'
import CountProCard from './CountProCard'

export default defineComponent({
  name: 'CountOperate',
  setup() {
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('pages-dashboard__progress')
    return () => (
      <CountProCard
        meta="运营活动效果"
        total={65}
        suffix="%"
        tip="运营活动效果"
        v-slots={{
          footer: () => (
            <div style="white-space:nowrap">
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
            </div>
          ),
        }}
      >
        <div class={prefixCls}>
          <div class={`${prefixCls}-target`}>
            <span class={`${prefixCls}-dot`}></span>
            <span class={`${prefixCls}-dot`} style={{ top: 'auto', bottom: 0 }}></span>
          </div>
          <div class={`${prefixCls}-wrapper`}>
            <div class={`${prefixCls}-bar`}></div>
          </div>
        </div>
      </CountProCard>
    )
  },
})
