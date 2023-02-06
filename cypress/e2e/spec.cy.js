describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.fas').should('be.visible')
  })
})
