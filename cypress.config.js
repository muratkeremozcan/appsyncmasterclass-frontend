const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'r8t63u',

  retries: {
    runMode: 2,
    openMode: 0,
  },

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
