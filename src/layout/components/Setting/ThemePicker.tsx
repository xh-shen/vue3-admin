/*
 * @Author: shen
 * @Date: 2021-01-31 09:44:12
 * @LastEditors: shen
 * @LastEditTime: 2021-02-05 00:08:16
 * @Description:
 */
import { defineComponent, ref } from 'vue'
import { useInject } from '@/hooks/useContext'
import { local } from '@/utils/storage'
import { Message } from '@/utils/element'
import { genThemeStyleTag, getThemeStyle } from '@/theme'

const colors = ['#409eff', '#36CBCB', '#F2637B', '#975FE5', '#FBD437']
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

    const onChange = async (value: string) => {
      const originalCluster = getThemeCluster(theme.value.replace('#', ''))
      const themeCluster = getThemeCluster(value.replace('#', ''))

      if (!chalk.value) {
        chalk.value = await getThemeStyle()
      }
      const newStyle: any = updateStyle(chalk.value, originalCluster, themeCluster)

      genThemeStyleTag(newStyle)

      chalk.value = newStyle

      local.set('theme-chalk', chalk.value)
      u('theme', value)
      Message('Switch Theme Success')
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
