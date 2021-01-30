/*
 * @Author: shen
 * @Date: 2021-01-26 11:11:28
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 12:14:34
 * @Description:
 */

import { defineComponent, ref, toRefs, watch } from 'vue'
import { useInject } from '@/hooks/useContext'
import ProCardProps from './props'
import classNames from 'classnames'
import './index.scss'

export default defineComponent({
  name: 'ProCard',
  props: ProCardProps,
  setup(props, { slots, emit }) {
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('pro-card')
    const { collapsed: controlCollapsed } = toRefs(props)
    const collapsed = ref<boolean>(controlCollapsed.value === undefined ? props.defaultCollapsed : controlCollapsed.value)

    if (controlCollapsed.value !== undefined) {
      watch(controlCollapsed, () => {
        collapsed.value = controlCollapsed.value as boolean
      })
    }

    const onCollapse = () => {
      collapsed.value = !collapsed.value
      emit('collapse', collapsed.value)
    }

    return () => {
      const proCardCls = classNames(prefixCls, {
        'is-always-shadow': props.shadow === 'always',
        'is-hover-shadow': props.shadow === 'hover',
        'is-border': props.border,
        'is-collapse': !collapsed.value,
      })
      const proCardHeaderCls = classNames(`${prefixCls}__header`, {
        'is-border': props.headerBorder,
      })
      const proCardfooterCls = classNames(`${prefixCls}__footer`, {
        'is-border': props.footerBorder,
      })
      // 非受控情况下展示
      const collapsibleButton = props.collapsible && controlCollapsed.value === undefined && (
        <div class={`${prefixCls}__header-collapse`} onClick={onCollapse}>
          <svg-icon icon-class="right-line" rotate={collapsed.value ? 90 : undefined} />
        </div>
      )

      return (
        <div class={proCardCls}>
          {(slots.header || props.title) && (
            <div class={proCardHeaderCls} style={props.headerStyle}>
              {collapsibleButton}
              {slots.header ? (
                slots.header()
              ) : (
                <>
                  <div class={`${prefixCls}__header-title`}>{props.title}</div>
                  {props.extra}
                </>
              )}
            </div>
          )}
          <div class={`${prefixCls}__content`} v-show={collapsed.value}>
            <div class={`${prefixCls}__body`} style={props.bodyStyle}>
              {slots.default && slots.default()}
            </div>
            {slots.footer && (
              <div class={proCardfooterCls} style={props.footerStyle}>
                {slots.footer()}
              </div>
            )}
          </div>
        </div>
      )
    }
  },
})
