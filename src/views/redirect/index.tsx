/*
 * @Author: shen
 * @Date: 2021-01-27 18:56:33
 * @LastEditors: shen
 * @LastEditTime: 2021-02-02 23:13:10
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const { replace } = useRouter()
    const route = useRoute()
    replace({ path: '/' + route.params.path, query: route.query })
    return () => h('div', { class: 'page-container' })
  },
})
