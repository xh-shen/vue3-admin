/*
 * @Author: shen
 * @Date: 2021-01-31 13:02:48
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 15:31:37
 * @Description:
 */

import { defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import { on, off } from '@/utils/dom'

const list = [
  { value: 'shen', label: 'shen' },
  { value: 'xh-shen', label: 'xh-shen' },
]

export default defineComponent({
  name: 'HeaderSearch',
  setup() {
    const { iconType } = useInject()
    const spanEl = ref<any>(null)
    const keyword = ref<string>('shen')
    const show = ref<boolean>(false)
    const handle = (e: Event) => {
      if (!spanEl.value.contains(e.target)) {
        show.value = false
        off(document, 'click', handle)
      }
    }
    const onShow = () => {
      if (!show.value) {
        show.value = true
        setTimeout(() => {
          on(document, 'click', handle)
        }, 0)
      }
    }
    const querySearch = (queryString: string, cb: (list: any[]) => void) => {
      const results = queryString ? list.filter((item) => item.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1) : list
      cb(results)
    }
    const onSelect = (item: any) => {
      console.log(item)
    }
    return () => (
      <span>
        <svg-icon icon-class={`search-${iconType.value}`} onClick={onShow} />
        <span ref={spanEl} class={['search-input', show.value ? 'show' : '']}>
          <el-autocomplete name="search" fetch-suggestions={querySearch} v-model={keyword.value} placeholder="请输入" onSelect={onSelect} />
        </span>
      </span>
    )
  },
})
