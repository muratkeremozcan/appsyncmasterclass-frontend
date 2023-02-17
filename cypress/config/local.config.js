const {defineConfig} = require('cypress')
const registerDataSession = require('cypress-data-session/src/plugin')

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
    setupNodeEvents(on, config) {
      registerDataSession(on, config)
      return config
    },
    env: {
      ENVIRONMENT: 'dev',
      API_URL:
        'https://awfrp7n7rrhw5kzqimfegnqzeq.appsync-api.eu-west-1.amazonaws.com/graphql',
    },
    baseUrl: 'http://localhost:8080/#/',
  },
})
