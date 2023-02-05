module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['eslint-plugin-cypress'],
  env: {
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {},
}
