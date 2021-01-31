/*
 * @Author: shen
 * @Date: 2021-01-31 17:23:48
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 19:13:23
 * @Description:
 */
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useInject } from '@/hooks/useContext'

import errImg from '@/assets/images/401.gif'
import './index.scss'

export default defineComponent({
  name: '403',
  setup() {
    const { getPrefixCls } = useInject()
    const { replace, go } = useRouter()
    const prefixCls = getPrefixCls('pages-error')
    return () => (
      <div class={prefixCls}>
        <img src={errImg} alt="" />
        <div class={`${prefixCls}-container`}>
          <p>对不起，你没有权限访问该页面</p>
          <div>
            <el-button onClick={() => replace('/')}>回首页</el-button>
            <el-button onClick={() => go(-1)}>返回上一页</el-button>
          </div>
        </div>
      </div>
    )
  },
})
