const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'r8t63u',
  experimentalSingleTabRunMode: true,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  viewportHeight: 800,
  viewportWidth: 800,

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
