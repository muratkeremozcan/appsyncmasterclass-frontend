import LogIn from './LogIn.vue'

describe('LogIn', () => {
  it('should', () => {
    cy.mount(LogIn)
    cy.get(':nth-child(3) > .w-full').type('a')
    cy.get(':nth-child(4) > .w-full').type('b')
    cy.get('.rounded-full').should('be.visible')
  })
})
