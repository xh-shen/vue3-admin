/*
 * @Author: shen
 * @Date: 2021-01-26 22:08:24
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 14:50:09
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import classNames from 'classnames'
import './index.scss'

export default defineComponent({
  name: 'RightPanel',
  setup(_, { slots }) {
    const { getPrefixCls, theme, iconType } = useInject()
    const prefixCls = getPrefixCls('right-panel')
    const visible = ref<boolean>(false)
    const onVisibleChange = () => {
      visible.value = !visible.value
    }
    return () => {
      const rightPanelCls = classNames(prefixCls, {
        [`${prefixCls}__show`]: visible.value,
      })
      return (
        <div class={rightPanelCls}>
          <div class={`${prefixCls}__background`} onClick={onVisibleChange} />
          <div class={`${prefixCls}__wrapper`}>
            <div class={`${prefixCls}__handle-button`} style={{ top: '250px', backgroundColor: theme.value }} onClick={onVisibleChange}>
              <svg-icon icon-class={`${visible.value ? 'circle-close' : 'setting'}-${iconType.value}`} />
            </div>
            <div style="height: 100%">{slots.default && slots.default()}</div>
          </div>
        </div>
      )
    }
  },
})
