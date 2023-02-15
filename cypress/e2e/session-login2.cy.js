describe('sessionLogin', () => {
  beforeEach(() =>
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD')),
  )

  Cypress._.times(2, () => {
    it('should', () => {
      cy.contains('Home')
    })
  })
})
