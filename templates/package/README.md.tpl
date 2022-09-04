# icons{{ suffix }}

Icons 组件库

## 安装

```bash
yarn add @cjy0208/icons{{ suffix }}
# 或者
npm install @cjy0208/icons{{ suffix }} --save
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
        libraryName: '@cjy0208/icons{{ suffix }}',
        camel2DashComponentName: false,
      },
      '@cjy0208/icons{{ suffix }}',
    ],
  ],
}
```
