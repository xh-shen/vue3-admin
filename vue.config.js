/*
 * @Author: shen
 * @Date: 2021-01-23 08:13:27
 * @LastEditors: shen
 * @LastEditTime: 2021-01-26 11:46:14
 * @Description:
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/variables.scss'), path.resolve(__dirname, './src/assets/styles/mixins.scss')],
    })
}

module.exports = {
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => addStyleResource(config.module.rule('sass').oneOf(type)))

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
