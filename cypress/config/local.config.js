const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'r8t63u',

  retries: {
    runMode: 2,
    openMode: 0,
  },

  viewportHeight: 1080,
  viewportWidth: 1920,

  experimentalStudio: true,

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    env: {
      ENVIRONMENT: 'dev',
    },
    baseUrl: 'http://localhost:8080/#/',
  },
})
