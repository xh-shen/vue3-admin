/*
 * @Author: shen
 * @Date: 2021-01-19 21:29:09
 * @LastEditors: shen
 * @LastEditTime: 2021-01-26 20:43:04
 * @Description:
 */
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from '@/hooks/useStore'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '@/hooks/useI18n'
import { useInject } from '@/hooks/useContext'
import { messages } from './lang'
import { LoginParams } from '@/interface/user'
import SelectLang from '@/components/SelectLang'
import logo from '@/assets/images/logo.png'
import './index.scss'

export default defineComponent({
  name: 'Login',
  setup() {
    const { t } = useI18n(messages)
    const { getPrefixCls } = useInject()
    const { replace } = useRouter()
    const { dispatch } = useStore()
    const route = useRoute()
    const loading = ref<boolean>(false)
    const loginRef = ref<Element | null>(null)
    const loginForm = reactive<LoginParams>({
      username: 'admin',
      password: '123456',
    })

    const prefixCls = getPrefixCls('login')

    const onLogin = () => {
      ;(loginRef.value as any).validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true
          const result = await dispatch('user/login', loginForm)
          if (result) {
            const redirect = (route.query.redirect as string | null) || '/'
            replace(redirect)
          }
          loading.value = false
        } else {
          return false
        }
      })
    }

    return () => {
      const rules = {
        username: [{ required: true, message: t('login.usernameRequired'), trigger: 'blur' }],
        password: [{ required: true, message: t('login.passwordRequired'), trigger: 'blur' }],
      }
      return (
        <div class={prefixCls}>
          <div class={`${prefixCls}__container`}>
            <div class={`${prefixCls}__title`}>
              <img src={logo} alt="" />
              <span>{t('app.title')}</span>
            </div>
            <el-form model={loginForm} rules={rules} ref={loginRef} class={`${prefixCls}__form`}>
              <div class={`${prefixCls}__lang`}>
                <SelectLang />
              </div>
              <el-form-item prop="username">
                <el-input vModel={loginForm.username} placeholder={t('login.username')} clearable />
              </el-form-item>
              <el-form-item prop="password">
                <el-input vModel={loginForm.password} placeholder={t('login.password')} show-password clearable />
              </el-form-item>
              <el-form-item>
                <el-button loading={loading.value} type="primary" style="width: 100%" onClick={onLogin}>
                  {t('login.button')}
                </el-button>
              </el-form-item>
            </el-form>
            <p class={`${prefixCls}__tip`}>{t('app.copyright')}</p>
          </div>
        </div>
      )
    }
  },
})
