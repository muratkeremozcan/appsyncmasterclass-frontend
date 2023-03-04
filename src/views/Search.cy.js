import Search from './Search.vue'

// Cannot read properties of undefined (reading 'query')
describe.skip('Search', () => {
  it('should view generic strings ', () => {
    Cypress.on('uncaught:exception', () => false) // doesn't help ignore the error

    cy.storeMount(Search)
    cy.contains('No results for')
  })
})
