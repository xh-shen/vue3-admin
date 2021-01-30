/*
 * @Author: shen
 * @Date: 2021-01-28 13:29:04
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 15:13:24
 * @Description:
 */
import { CSSProperties, defineComponent, PropType } from 'vue'
import { useInject } from '@/hooks/useContext'

const CountProCardProps = {
  meta: {
    type: String as PropType<string>,
  },
  total: {
    type: Number as PropType<number>,
  },
  footerMeta: {
    type: String as PropType<string>,
  },
  footerTotal: {
    type: Number as PropType<number>,
  },
  prefix: {
    type: String as PropType<string>,
    default: '',
  },
  footerPrefix: {
    type: String as PropType<string>,
    default: '',
  },
  suffix: {
    type: String as PropType<string>,
    default: '',
  },
  footerSuffix: {
    type: String as PropType<string>,
    default: '',
  },
  contentStyle: {
    type: Object as PropType<CSSProperties>,
  },
  tip: {
    type: String as PropType<string>,
    default: '',
  },
}

export default defineComponent({
  name: 'CountProCard',
  props: CountProCardProps,
  setup(props, { slots }) {
    const { iconType, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('pages-dashboard__count')

    const header = () => (
      <div class={`${prefixCls}-head`}>
        <div class={`${prefixCls}-head-meta`}>
          <span>{props.meta}</span>
          <span class={`${prefixCls}-head-tip`}>
            <el-tooltip effect="dark" content={props.meta || props.tip} placement="top">
              <svg-icon icon-class={`warning-${iconType.value}`} />
            </el-tooltip>
          </span>
        </div>
        <div class={`${prefixCls}-head-total`}>
          <count-up
            delay={100}
            endVal={props.total}
            options={{
              prefix: props.prefix,
              suffix: props.suffix,
            }}
          />
        </div>
      </div>
    )
    const footer = () => (
      <div class={`${prefixCls}-foot`}>
        {slots.footer ? (
          slots.footer()
        ) : (
          <>
            <span>{props.footerMeta}</span>
            <span style="margin-left: 8px">
              <count-up
                delay={100}
                endVal={props.footerTotal}
                options={{
                  prefix: props.footerPrefix || props.prefix,
                  suffix: props.footerSuffix || props.suffix,
                }}
              />
            </span>
          </>
        )}
      </div>
    )
    const children = () => (
      <div class={`${prefixCls}-body`}>
        <div class={`${prefixCls}-content`} style={props.contentStyle}>
          {slots.default && slots.default()}
        </div>
      </div>
    )
    return () => <pro-card class={prefixCls} bodyStyle={{ paddingTop: 0 }} v-slots={{ default: children, header, footer }} />
  },
})
