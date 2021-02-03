<!--
 * @Author: shen
 * @Date: 2021-01-19 19:33:56
 * @LastEditors: shen
 * @LastEditTime: 2021-02-03 10:09:55
 * @Description:
-->

<p align="center">
  <img width="320" src="https://shen.xingh.com.cn/logo_big.png">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue-next">
    <img src="https://img.shields.io/badge/vue-3.0.0-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/element--plus-1.0.2.beta28-brightgreen.svg" alt="element-plus">
  </a>
  <a href="https://github.com/xh-shen/vue3-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## 简介

[vue3-admin](https://shen.xingh.com.cn/)一个基于 vue3.0、typescript、element plus、echarts、vue-i18n 等库开发的系统项目模版，全部采用 tsx 方式书写组件，整体框架已经完成，尚有小部分功能没有实现完美，如主题切换没有完成，对 element plus 组件的二次封装没有完成，主要是时间有限，待后续完善。

- [在线预览](https://shen.xingh.com.cn/)

## 开发

```bash
# 克隆项目
git clone https://github.com/xh-shen/vue3-admin.git

# 进入项目目录
cd vue3-admin

# 安装依赖
npm install
# 或
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```

## 发布

```bash
# 构建测试环境
npm run build
# 目前尚未做多环境部署，待完善
```

## 其它

```bash
# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

# 压缩整理是svg icon
npm run svgo
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                        | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                |

## License

[MIT](https://github.com/xh-shen/vue3-admin/blob/master/LICENSE)
