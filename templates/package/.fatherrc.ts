export default {
  cjs: {
    type: 'babel',
    minify: true,
    lazy: true,
  },
  esm: {
    type: 'babel',
  },
  runtimeHelpers: true,
  extraExternals: ['react', 'react-dom', /^@babel\/runtime/],
}
