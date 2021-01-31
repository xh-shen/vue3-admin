/*
 * @Author: shen
 * @Date: 2021-01-31 09:44:12
 * @LastEditors: shen
 * @LastEditTime: 2021-01-31 14:27:54
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'

const colors = ['#409eff', '#3AA1FF', '#36CBCB', '#F2637B', '#975FE5', '#FBD437']

export default defineComponent({
  name: 'ThemePicker',
  setup() {
    const { theme, getPrefixCls, u } = useInject()
    const prefixCls = getPrefixCls('layout__setting')
    const chalk = ref('')

    const updateStyle = (style: string, oldCluster: string[], newCluster: string[]) => {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    }

    const getCSSString = (url: string) => {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            chalk.value = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve(null)
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    }

    const getThemeCluster = (theme: string) => {
      const tintColor = (color: string, tint: number) => {
        let red: number | string = parseInt(color.slice(0, 2), 16)
        let green: number | string = parseInt(color.slice(2, 4), 16)
        let blue: number | string = parseInt(color.slice(4, 6), 16)

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color: string, shade: number) => {
        let red: number | string = parseInt(color.slice(0, 2), 16)
        let green: number | string = parseInt(color.slice(2, 4), 16)
        let blue: number | string = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }

    const getHandler = (id: string, themeCluster: string[]) => {
      return () => {
        const originalCluster = getThemeCluster(theme.value.replace('#', ''))
        const newStyle: any = updateStyle(chalk.value, originalCluster, themeCluster)

        let styleTag = document.getElementById(id)
        if (!styleTag) {
          styleTag = document.createElement('style')
          styleTag.setAttribute('id', id)
          document.head.appendChild(styleTag)
        }
        styleTag.innerText = newStyle
        chalk.value = newStyle
      }
    }

    const onChange = async (value: string) => {
      const themeCluster = getThemeCluster(value.replace('#', ''))
      const originalCluster = getThemeCluster(theme.value.replace('#', ''))

      if (!chalk.value) {
        await getCSSString('/theme-chalk/index.css')
      }

      const chalkHandler = getHandler('chalk-style', themeCluster)

      chalkHandler()

      const styles = [].slice.call(document.querySelectorAll('style')).filter((style: any) => {
        const text = style.innerText
        return new RegExp(theme.value, 'i').test(text) && !/Chalk Variables/.test(text)
      })
      styles.forEach((style: any) => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = updateStyle(innerText, originalCluster, themeCluster)
      })
      u('theme', value)
    }
    return () => (
      <div class={`${prefixCls}-color`}>
        {colors.map((color) => (
          <div class={`${prefixCls}-color-item`} key={color} style={{ backgroundColor: color }} onClick={() => onChange(color)}>
            {theme.value === color && <i class="el-icon-check"></i>}
          </div>
        ))}
        <el-color-picker size="mini" modelValue={theme.value} onChange={onChange} />
      </div>
    )
  },
})
