describe('Prog Login', () => {
  beforeEach(() => {
    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  it('should progLogin', () => {
    cy.contains('Hey', {timeout: 10000})
  })

  it('should progLogin again', () => {
    cy.contains('Hey', {timeout: 10000})
  })

  it('should progLogin one more time', () => {
    cy.contains('Hey', {timeout: 10000})
  })
})
