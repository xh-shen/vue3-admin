/*
 * @Author: shen
 * @Date: 2021-02-04 23:31:55
 * @LastEditors: shen
 * @LastEditTime: 2021-02-05 00:01:57
 * @Description:
 */
import { local } from './utils/storage'

function getCSSString(url: string) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      }
    }
    xhr.open('GET', url)
    xhr.send()
  })
}

export async function getThemeStyle() {
  let style: any = ''
  const localTheme = local.get<string>('theme-chalk')
  if (!localTheme) {
    style = await getCSSString('/theme-chalk.css')
  } else {
    style = localTheme
  }
  return style
}

export function genThemeStyleTag(style: string) {
  let styleTag = document.getElementById('chalk-style')
  if (!styleTag) {
    styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'chalk-style')
    document.body.appendChild(styleTag)
  }
  styleTag.innerText = style
}

export function createThemeStyle() {
  const localStyle = local.get<string>('theme-chalk')
  const localTheme = local.get<string>('theme')
  if (!(localStyle && localTheme)) {
    local.remove('theme-chalk')
    local.remove('theme')
    return
  }
  genThemeStyleTag(localStyle)
}

export function removeStyleTag() {
  const localStyle = local.get<string>('theme-chalk')
  if (localStyle) {
    local.remove('theme-chalk')
  }
  const styleTag = document.getElementById('chalk-style')
  if (styleTag) {
    document.body.removeChild(styleTag)
  }
}
