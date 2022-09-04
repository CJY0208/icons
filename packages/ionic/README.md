# icons

[![size](https://img.shields.io/bundlephobia/minzip/@cjy0208/icons@latest.svg)](https://bundlephobia.com/result?p=@cjy0208/icons@latest)

Icons 组件库（ionic）

## 安装

```bash
yarn add @cjy0208/icons
# 或者
npm install @cjy0208/icons --save
```

## 按需加载

配合 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现按需加载

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@cjy0208/icons',
        camel2DashComponentName: false,
      },
      '@cjy0208/icons',
    ],
  ],
}
```