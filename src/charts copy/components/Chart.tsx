/*
 * @Author: shen
 * @Date: 2021-01-29 21:37:07
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 12:04:00
 * @Description:
 */
import { defineComponent, nextTick, onMounted, onUnmounted, ref, toRefs, watch, isProxy, PropType } from 'vue'
import ChartFactory, { ECharts, ECBasicOption } from '../ChartFactory'
import { useResize } from '@/hooks/useResize'
import { useInject } from '@/hooks/useContext'
import ChartProps from '../props'

const BaseChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<ECBasicOption>,
  },
}

export default defineComponent({
  name: 'Chart',
  props: BaseChartProps,
  setup(props, { attrs }) {
    let instance: ECharts
    const { data } = toRefs(props)
    const { collapse } = useInject()
    const dom = ref<HTMLElement | null>(null)
    const setDataset = () => {
      instance &&
        instance.setOption({
          dataset: {
            source: props.data,
          },
        })
    }
    watch(data, setDataset)
    watch(
      () => props.options,
      () => {
        instance && props.options && instance.setOption(props.options as ECBasicOption)
      },
    )
    watch(collapse, () => {
      setTimeout(() => instance && instance.resize(), 0)
    })
    useResize(() => {
      instance && instance.resize()
    })
    onMounted(() => {
      nextTick(() => {
        instance = ChartFactory.create(dom.value as HTMLElement, attrs.option, props.options)
        props.getInstance && props.getInstance(instance)
        setDataset()
      })
    })
    onUnmounted(() => {
      instance && instance.dispose()
    })
    return () => <div ref={dom} style="width: 100%;height:100%;"></div>
  },
})
