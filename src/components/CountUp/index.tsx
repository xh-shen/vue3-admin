/*
 * @Author: shen
 * @Date: 2021-01-28 16:45:44
 * @LastEditors: shen
 * @LastEditTime: 2021-01-28 19:09:29
 * @Description:
 */
import { defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'
// import { isFunction } from 'lodash-es'

const CountUpProps = {
  delay: {
    type: Number as PropType<number>,
    default: 0,
  },
  endVal: {
    type: Number as PropType<number>,
    required: true,
  },
  options: {
    type: Object as PropType<CountUpOptions>,
  },
} as const

export default defineComponent({
  name: 'CountUp',
  props: CountUpProps,
  setup(props, { emit }) {
    const elRef = ref<HTMLElement | null>(null)
    let instance: any = null
    const create = () => {
      if (instance) {
        return
      }
      const countUp = new CountUp(elRef.value as HTMLElement, props.endVal, props.options)
      if (countUp.error) {
        return
      }
      instance = countUp
      if (props.delay < 0) {
        emit('ready', instance, CountUp)
        return
      }
      setTimeout(() => countUp.start(() => emit('ready', countUp, CountUp)), props.delay)
    }
    onMounted(() => {
      create()
    })
    onUnmounted(() => {
      instance = null
    })
    return () => <span ref={elRef} />
  },
})
