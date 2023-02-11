const {defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // no-op
    },
  },

  component: {
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack',
    },
  },
})
