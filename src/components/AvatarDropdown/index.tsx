/*
 * @Author: shen
 * @Date: 2021-01-23 13:15:32
 * @LastEditors: shen
 * @LastEditTime: 2021-01-27 20:18:51
 * @Description:
 */

import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { useInject } from '@/hooks/useContext'
import logo from '@/assets/images/logo.png'

export default defineComponent({
  name: 'AvatarDropdown',
  props: {
    username: {
      type: String as PropType<string>,
    },
    onCommand: {
      type: Function as PropType<(command: string) => void>,
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n()
    const { iconType, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__header')
    const onCommand = (command: string) => {
      emit('command', command)
    }
    return () => (
      <el-dropdown
        onCommand={onCommand}
        v-slots={{
          dropdown: () => (
            <el-dropdown-menu>
              <el-dropdown-item command="user">
                <svg-icon icon-class={`user-${iconType.value}`} style="margin-right: 8px" />
                {t('app.userCenter')}
              </el-dropdown-item>
              <el-dropdown-item command="setting">
                <svg-icon icon-class={`setting-${iconType.value}`} style="margin-right: 8px" />
                {t('app.setting')}
              </el-dropdown-item>
              <el-dropdown-item command="logout" divided>
                <svg-icon icon-class={`logout-${iconType.value}`} style="margin-right: 8px" />
                {t('app.logout')}
              </el-dropdown-item>
            </el-dropdown-menu>
          ),
        }}
      >
        <span class={`${prefixCls}-active-base ${prefixCls}-active-user`}>
          <span class={`${prefixCls}-active-user-avatar`}>
            <img src={logo} alt="" />
          </span>
          {props.username}
        </span>
      </el-dropdown>
    )
  },
})
