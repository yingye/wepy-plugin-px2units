# wepy框架px2units插件

[![npm version](https://badge.fury.io/js/wepy-plugin-px2units.svg)](https://badge.fury.io/js/wepy-plugin-px2units)
[![change-log](https://img.shields.io/badge/changelog-md-blue.svg)](https://github.com/yingye/wepy-plugin-px2units/blob/master/CHANGELOG.md)

本插件不支持 wepy 2.x 版本，新的版本已经支持 postcss 插件了，文档地址：[compiler-postcss](https://wepyjs.github.io/wepy-docs/2.x/#/plugin/official?id=compiler-postcss)，推荐使用：[postcss-px2units](https://github.com/yingye/postcss-px2units) 插件。

## 安装

```
npm install wepy-plugin-px2units --save-dev
```

## 配置`wepy.config.js`

```js
module.exports.plugins = {
  'px2units': {
    filter: /\.wxss$/
    // 忽略 abc.wxss 文件示例
    // filter: /(?<!\/abc)\.wxss$/i
  },
};
```

## 参数说明 

[postcss-px2units](https://github.com/yingye/postcss-px2units)
