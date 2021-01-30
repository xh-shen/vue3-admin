/*
 * @Author: shen
 * @Date: 2021-01-21 16:37:02
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 20:20:38
 * @Description:
 */

import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/hooks/useStore'
import { useInject } from '@/hooks/useContext'
import SelectSize from '@/components/SelectSize'
import SelectLang from '@/components/SelectLang'
import Screenfull from '@/components/Screenfull'
import AvatarDropdown from '@/components/AvatarDropdown'

export default defineComponent({
  name: 'HeaderRight',
  setup() {
    const route = useRoute()
    const { replace } = useRouter()
    const { getters, dispatch } = useStore()
    const { iconType, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__header')
    const username = computed(() => getters.userInfo.username || getters.userInfo.realName)
    const onCommand = async (command: string) => {
      switch (command) {
        case 'logout':
          console.log(command)
          await dispatch('user/logout')
          replace({ path: '/', query: { redirect: route.path } })
          break
      }
    }
    return () => (
      <div>
        <span class={`${prefixCls}-active-base ${prefixCls}-active-search`}>
          <span style="display:block">
            <svg-icon icon-class={`search-${iconType.value}`} />
          </span>
        </span>
        <span class={`${prefixCls}-active-base ${prefixCls}-active-notify`}>
          <span style="display:block">
            <el-badge value={200} max={99} type="danger" is-dot style="position: relative; top: -1px;height: 20px; line-height: 20px">
              <svg-icon icon-class={`notice-${iconType.value}`} />
            </el-badge>
          </span>
        </span>
        <Screenfull class={`${prefixCls}-active-base ${prefixCls}-active-fullscreen`} />
        <SelectSize class={`${prefixCls}-active-base ${prefixCls}-active-size`} />
        <AvatarDropdown username={username.value} onCommand={onCommand} />
        <SelectLang class={`${prefixCls}-active-base ${prefixCls}-active-lang`} />
      </div>
    )
  },
})
