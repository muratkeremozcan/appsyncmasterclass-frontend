describe('sessionLogin', () => {
  beforeEach(() =>
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD')),
  )

  Cypress._.times(2, () => {
    it('should login with session', () => {
      cy.contains('Home')
    })
  })
})
