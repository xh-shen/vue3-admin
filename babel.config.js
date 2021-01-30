/*
 * @Author: shen
 * @Date: 2021-01-19 19:33:43
 * @LastEditors: shen
 * @LastEditTime: 2021-01-22 19:33:48
 * @Description:
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@vue/babel-plugin-jsx',
    [
      'component',
      {
        libraryName: 'element-plus',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
