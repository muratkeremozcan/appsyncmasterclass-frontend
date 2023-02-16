describe('sessionLogin', () => {
  beforeEach(() =>
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD')),
  )

  Cypress._.times(5, () => {
    it('should login with session', () => {
      cy.contains('Home')
    })
  })
})
