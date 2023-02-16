import Root from './Root.vue'

describe('Root', {viewportHeight: 800, viewportWidth: 800}, () => {
  it('should view generic strings ', () => {
    cy.storeMount(Root)
    cy.contains("See what's happening")
    cy.contains('Follow your interests.')
  })
})
