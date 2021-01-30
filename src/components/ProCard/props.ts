/*
 * @Author: shen
 * @Date: 2021-01-27 22:27:04
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 18:57:49
 * @Description:
 */
import { CSSProperties, PropType } from 'vue'

export type ShadowType = 'always' | 'hover' | 'never'

export default {
  /** 卡片标题 */
  title: {
    type: String as PropType<string>,
    default: '',
  },
  /** 右上角自定义区域 */
  extra: {
    type: Object as PropType<Element>,
  },
  /** 标题样式 */
  headerStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /** 内容样式 */
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /** 底部样式 */
  footerStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /** 悬浮效果，never：默认不悬浮、hover：鼠标经过悬浮、always：一直悬浮 */
  shadow: {
    type: String as PropType<ShadowType>,
    default: 'never',
  },
  /** 是否有边框 */
  border: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /** 页头是否有分割线 */
  headerBorder: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  footerBorder: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /** 是否可折叠 */
  collapsible: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /** 配置默认是否折叠 */
  defaultCollapsed: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /** 受控 collapsed 属性 */
  collapsed: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  /** 收起卡片的事件 */
  onCollapse: {
    type: Function as PropType<(collapse: boolean) => void>,
  },
} as const
