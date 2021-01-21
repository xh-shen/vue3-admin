/*
 * @Author: shen
 * @Date: 2021-01-19 21:11:52
 * @LastEditors: shen
 * @LastEditTime: 2021-01-19 22:36:29
 * @Description:
 */

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div style="height: 100%">
          {/* <router-link to="/">Home</router-link> |<router-link to="/about">About</router-link> */}
          <router-view />
        </div>
      )
    }
  },
})
