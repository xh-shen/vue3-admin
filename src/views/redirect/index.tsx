/*
 * @Author: shen
 * @Date: 2021-01-27 18:56:33
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 19:25:02
 * @Description:
 */
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const { replace } = useRouter()
    const route = useRoute()
    replace({ path: '/' + route.params.path, query: route.query })
    return () => null
  },
})
