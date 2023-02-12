import Home from './Home.vue'

describe('Home', () => {
  it('should', () => {
    cy.mount(Home)
    cy.get('.fab').should('be.visible')
    cy.contains('h1', 'Home')
    cy.contains('Welcome to Twitter!')
  })
})
