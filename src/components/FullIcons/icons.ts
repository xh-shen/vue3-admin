/*
 * @Author: shen
 * @Date: 2021-01-24 15:50:30
 * @LastEditors: shen
 * @LastEditTime: 2021-01-25 16:40:25
 * @Description:
 */
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
const requireAll = (requireContext: any) => requireContext.keys()

const re = /\.\/(.*)\.svg/

const icons = requireAll(req).map((i: any) => {
  return i.match(re)[1]
})

export default icons
