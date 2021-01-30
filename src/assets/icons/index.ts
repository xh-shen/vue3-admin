/*
 * @Author: shen
 * @Date: 2021-01-23 00:34:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-24 17:17:30
 * @Description:
 */
const req: any = require.context('./svg', false, /\.svg$/)
const requireAll: any = (requireContext: any) => requireContext.keys().map(requireContext)
requireAll(req)
