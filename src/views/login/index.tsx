/*
 * @Author: shen
 * @Date: 2021-01-19 21:29:09
 * @LastEditors: shen
 * @LastEditTime: 2021-01-21 16:43:24
 * @Description:
 */
import { defineComponent, reactive, ref, getCurrentInstance } from 'vue'
import { sleep } from '@/utils'
import config from '@/config'
import logo from '@/assets/images/logo.png'
import './index.scss'
import { setToken } from '@/utils/token'

const { prefixCls, title } = config

const namespaceCls = `${prefixCls}-login`

export default defineComponent({
  name: 'Login',
  setup() {
    const { proxy } = getCurrentInstance()!
    const loading = ref(false)
    const loginRef = ref(null)

    const loginForm = reactive({
      username: 'shen',
      password: '123456',
    })

    const rules = {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    }

    const onLogin = () => {
      ;(loginRef.value as any).validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true
          await sleep(1000)
          const { username, password } = loginForm
          if (username !== 'shen' || password !== '123456') {
            proxy!.$notify.error({
              title: '提示',
              message: '用户名或密码错误',
            })
          } else {
            setToken(username + password)
            proxy!.$router.replace('/')
          }
          loading.value = false
        } else {
          return false
        }
      })
    }

    return () => {
      return (
        <div class={namespaceCls}>
          <div class={`${namespaceCls}-container`}>
            <div class={`${namespaceCls}-title`}>
              <img src={logo} alt="" />
              <span>{title}</span>
            </div>
            <el-form model={loginForm} rules={rules} ref={loginRef} class={`${namespaceCls}-form`}>
              <el-form-item prop="username">
                <el-input vModel={loginForm.username} placeholder="用户名" clearable />
              </el-form-item>
              <el-form-item prop="password">
                <el-input vModel={loginForm.password} placeholder="密码" show-password clearable />
              </el-form-item>
              <el-form-item>
                <el-button loading={loading.value} type="primary" style="width: 100%" onClick={onLogin}>
                  登陆
                </el-button>
              </el-form-item>
            </el-form>
            <p class={`${namespaceCls}-tip`}>{title} 由shen独立制作驱动</p>
          </div>
        </div>
      )
    }
  },
})
