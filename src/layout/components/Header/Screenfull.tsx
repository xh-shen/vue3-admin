/*
 * @Author: shen
 * @Date: 2021-01-31 13:03:37
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 13:03:48
 * @Description:
 */
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import { Message } from '@/utils/element'
import screenfull, { Screenfull } from 'screenfull'

export default defineComponent({
  name: 'Screenfull',
  setup() {
    const { iconType } = useInject()
    const isFullscreen = ref<boolean>(false)

    const onChange = () => {
      isFullscreen.value = (screenfull as Screenfull).isFullscreen
    }

    const onScreenfull = () => {
      if (!(screenfull as Screenfull).isEnabled) {
        Message('you browser can not work', 'warning')
        return false
      }
      ;(screenfull as Screenfull).toggle()
    }

    onMounted(() => {
      if ((screenfull as Screenfull).isEnabled) {
        ;(screenfull as Screenfull).on('change', onChange)
      }
    })

    onUnmounted(() => {
      if ((screenfull as Screenfull).isEnabled) {
        ;(screenfull as Screenfull).off('change', onChange)
      }
    })

    return () => (
      <span onClick={onScreenfull}>
        <span style="display:block; font-size: 16px;position: relative; top: -1px;">
          <svg-icon icon-class={`${isFullscreen.value ? 'exit-full' : 'full'}-${iconType.value}`} />
        </span>
      </span>
    )
  },
})
