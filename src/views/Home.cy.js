import Home from './Home.vue'

// TODO Cannot read properties of undefined (reading 'name')
describe.skip('Home', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Home)
    cy.get('.fab').should('be.visible')
    cy.contains('Home')
  })
})
