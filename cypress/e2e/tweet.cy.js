describe('Tweet', () => {
  it('should tweet', () => {
    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })
})
