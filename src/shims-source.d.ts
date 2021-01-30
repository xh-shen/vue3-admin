/*
 * @Author: shen
 * @Date: 2021-01-19 22:25:30
 * @LastEditors: shen
 * @LastEditTime: 2021-01-26 20:25:37
 * @Description:
 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
