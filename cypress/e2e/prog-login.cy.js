describe('Prog Login', () => {
  beforeEach(() => {
    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  it('should progLogin', () => {
    cy.contains('Root', {timeout: 10000})
  })

  it('should progLogin again', () => {
    cy.contains('Root', {timeout: 10000})
  })
})
