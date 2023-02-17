const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
  NodeGlobalsPolyfillPlugin,
} = require('@esbuild-plugins/node-globals-polyfill')
const {
  NodeModulesPolyfillPlugin,
} = require('@esbuild-plugins/node-modules-polyfill')

/**
 * The collection of tasks to use with `cy.task()`
 * @param on `on` is used to hook into various events Cypress emits
 */
module.exports = function tasks(on) {
  on(
    'file:preprocessor',
    createBundler({
      plugins: [
        NodeModulesPolyfillPlugin(),
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    }),
  )
  // add tasks here
}
