/*
 * @Author: shen
 * @Date: 2021-01-24 19:15:55
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 10:28:24
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { useI18n } from '@/hooks/useI18n'
import { useInject } from '@/hooks/useContext'
import './index.scss'

const DialogProps = {
  title: {
    type: String as PropType<string>,
    default: '',
  },
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  width: {
    type: String as PropType<string>,
    default: '50%',
  },
  appendToBody: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  customClass: {
    type: String as PropType<string>,
    default: '',
  },
  onConfirm: {
    type: Function as PropType<() => void>,
  },
  onCancel: {
    type: Function as PropType<() => void>,
  },
}

export default defineComponent({
  name: 'BaseDialog',
  inheritAttrs: false,
  props: DialogProps,
  setup(props, { attrs, emit, slots }) {
    console.log(attrs)
    const { t } = useI18n()
    const { getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('dialog')
    const customClass = `${prefixCls} ${props.customClass}`
    const onCancel = () => {
      emit('update:modelValue', false)
      emit('cancel')
    }
    const onConfirm = () => {
      emit('update:modelValue', false)
      emit('confirm')
    }

    const footer = () => (
      <>
        <el-button onClick={onCancel}>{t('button.cancel')}</el-button>
        <el-button type="primary" onClick={onConfirm}>
          {t('button.confirm')}
        </el-button>
      </>
    )

    return () => {
      return (
        <el-dialog
          {...attrs}
          title={props.title}
          model-value={props.modelValue}
          custom-class={customClass}
          append-to-body={props.appendToBody}
          width={props.width}
          v-slots={{
            default: slots.default,
            title: slots.title,
            footer: slots.footer || footer,
          }}
        ></el-dialog>
      )
    }
  },
})
