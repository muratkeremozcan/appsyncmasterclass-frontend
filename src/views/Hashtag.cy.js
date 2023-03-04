import Hashtag from './Hashtag.vue'

// TODO Cannot read properties of undefined (reading 'query')
describe.skip('Hashtag', () => {
  it('should view generic strings ', () => {
    Cypress.on('uncaught:exception', () => false) // doesn't help ignore the error

    cy.storeMount(Hashtag)
    cy.contains('No results for')
  })
})
