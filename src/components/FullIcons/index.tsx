/*
 * @Author: shen
 * @Date: 2021-01-24 15:46:24
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 18:57:41
 * @Description:
 */
import { computed, defineComponent, PropType, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import { IconType } from '@/types'
import clipboard from '@/utils/clipboard'
import icons from './icons'
import './index.scss'

type Mode = 'copy' | 'select'

const FullIconsProps = {
  mode: {
    type: String as PropType<Mode>,
    default: 'copy',
  },
  onSelect: {
    type: Function as PropType<(iconClass: string) => void>,
  },
} as const

export default defineComponent({
  name: 'FullIcons',
  props: FullIconsProps,
  setup(props, { emit }) {
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('icons')
    const iconClass = ref<string>('')
    const iconType = ref<IconType>('line')
    const keyword = ref<string>('')

    const generateIconCode = (symbol: string) => {
      return `<svg-icon icon-class="${symbol}" />`
    }

    const onClick = (e: MouseEvent, item: string) => {
      if (props.mode === 'select') {
        iconClass.value = item
        emit('select', item)
      } else {
        clipboard(generateIconCode(item), e)
      }
    }

    const iconsFilter = computed(() => icons.filter((icon: string) => icon.endsWith(iconType.value) && (!keyword.value || icon.indexOf(keyword.value) > -1)))

    return () => (
      <div class={prefixCls}>
        <div class={`${prefixCls}-actions`}>
          <el-radio-group v-model={iconType.value} class={`${prefixCls}-actions-change`}>
            <el-radio-button label="line">线框风格</el-radio-button>
            <el-radio-button label="fill">实底风格</el-radio-button>
          </el-radio-group>
          <div class={`${prefixCls}-actions-search`}>
            <el-input
              v-model={keyword.value}
              placeholder="请输入内容"
              clearable
              v-slots={{
                append: () => <el-button icon="el-icon-search"></el-button>,
              }}
            />
          </div>
        </div>
        <div class={`${prefixCls}-list`}>
          {iconsFilter.value.map((item: string) => (
            <div key={item} class={[`${prefixCls}-item`, iconClass.value === item && 'active']} onClick={(e) => onClick(e, item)}>
              <span class={`${prefixCls}-item-icon`}>
                <svg-icon icon-class={item} class-name="disabled" />
              </span>
              <span class={`${prefixCls}-item-name`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
})
