import LogIn from './LogIn.vue'

describe('LogIn', () => {
  it('should', () => {
    cy.mount(LogIn)
    cy.contains('h1', 'LogIn')
  })
})
