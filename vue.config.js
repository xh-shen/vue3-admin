/*
 * @Author: shen
 * @Date: 2021-01-23 08:13:27
 * @LastEditors: shen
 * @LastEditTime: 2021-02-04 23:20:47
 * @Description:
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackDynamicThemePlugin = require('webpack-dynamic-theme-plugin')

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
  productionSourceMap: false,
  configureWebpack: () => {
    const plugins = [
      new WebpackDynamicThemePlugin({
        theme: '#409eff',
      }),
    ]
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
        }),
      )
    }
    return {
      plugins,
    }
  },
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
