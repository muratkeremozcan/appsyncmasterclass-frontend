import Home from './Home.vue'

describe('Home', () => {
  it('should', () => {
    cy.storeMount(Home)
    cy.get('.fab').should('be.visible')
    cy.contains('Home')
    cy.contains('Welcome to Twitter!')
  })
})
