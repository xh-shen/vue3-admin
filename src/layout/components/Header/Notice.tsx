/*
 * @Author: shen
 * @Date: 2021-01-31 13:02:27
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 13:02:38
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'

export default defineComponent({
  name: 'HeaderNotice',
  setup() {
    const { iconType } = useInject()
    const active = ref<string>('notice')
    const tabPane = () => (
      <>
        <div>
          <div class="notice-tab-pane">
            <div class="name">任务名称</div>
            <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
          </div>
          <div class="notice-tab-pane">
            <div class="name">任务名称</div>
            <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
          </div>
          <div class="notice-tab-pane">
            <div class="name">任务名称</div>
            <div class="desc">任务需要在 2017-01-12 20:00 前启动</div>
          </div>
        </div>
        <div class="notive-btn">
          <span>清空 通知</span>
          <span>查看更多</span>
        </div>
      </>
    )
    return () => (
      <span>
        <el-popover
          popper-class="header-notice-popover"
          placement="bottom-end"
          trigger="click"
          width="350px"
          v-slots={{
            reference: () => (
              <span class="notice-content">
                <el-badge value={200} max={99} type="danger" class="notice-badge" is-dot>
                  <svg-icon icon-class={`notice-${iconType.value}`} />
                </el-badge>
              </span>
            ),
          }}
        >
          <el-tabs v-model={active.value}>
            <el-tab-pane label="通知(10)" name="notice">
              {tabPane()}
            </el-tab-pane>
            <el-tab-pane label="消息(5)" name="news">
              {tabPane()}
            </el-tab-pane>
            <el-tab-pane label="待办(7)" name="need">
              {tabPane()}
            </el-tab-pane>
          </el-tabs>
        </el-popover>
      </span>
    )
  },
})
