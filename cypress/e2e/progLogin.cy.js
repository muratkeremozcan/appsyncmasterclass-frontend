describe('ProgLogin', () => {
  it('should progLogin', () => {
    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.contains('Home')
  })
})
