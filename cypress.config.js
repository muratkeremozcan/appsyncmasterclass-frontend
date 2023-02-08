const {defineConfig} = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'http://localhost:8080/#/',
  },

  component: {
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack',
    },
  },
})
