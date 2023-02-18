import Home from './Home.vue'

describe('Home', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Home)
    cy.get('.fab').should('be.visible')
    cy.contains('Home')
  })
})
