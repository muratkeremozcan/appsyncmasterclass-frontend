describe('Prog Login', () => {
  beforeEach(() => {
    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  it('should progLogin', () => {
    cy.contains('See what', {timeout: 10000})
  })
})
