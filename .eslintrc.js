module.exports = {
  root: true,
  plugins: [
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
    "eqeqeq": "off",
    'vue/no-v-for-template-key': 'off',
    'standard/no-callback-literal': 0,
    'vue/multi-word-component-names': 0,
    "allowEmptyCatch": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
