/*
 * @Author: shen
 * @Date: 2021-01-23 00:06:08
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 18:58:36
 * @Description:
 */

import { computed, defineComponent, PropType } from 'vue'
import { useInject } from '@/hooks/useContext'
import classNames from 'classnames'
import './index.scss'

const SvgIconProps = {
  iconClass: {
    type: String as PropType<string>,
    required: true,
  },
  className: {
    type: String as PropType<string>,
    default: '',
  },
  spin: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  rotate: {
    type: Number as PropType<number>,
  },
} as const

export default defineComponent({
  name: 'SvgIcon',
  props: SvgIconProps,
  setup(props, { attrs }) {
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('svg-icon')
    const iconName = computed((): string => `#icon-${props.iconClass}`)
    return () => {
      const svgIconCls = classNames('svg-icon', prefixCls, props.className, {
        [`${prefixCls}__spin`]: props.spin,
      })
      const svgStyle = props.rotate
        ? {
            msTransform: `rotate(${props.rotate}deg)`,
            transform: `rotate(${props.rotate}deg)`,
          }
        : undefined
      const innerSvgProps = {
        ...attrs,
        class: svgIconCls,
        style: svgStyle,
      }
      return (
        <svg aria-hidden="true" {...innerSvgProps}>
          <use xlinkHref={iconName.value} />
        </svg>
      )
    }
  },
})
