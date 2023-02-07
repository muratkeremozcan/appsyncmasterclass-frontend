import Home from './Home.vue'

describe('Home', () => {
  it('should', () => {
    cy.mount(Home)
    cy.contains('h1', 'Home')
  })
})
