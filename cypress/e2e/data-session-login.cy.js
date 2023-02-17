describe('sessionLogin', () => {
  beforeEach(() =>
    cy.dataSessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD')),
  )

  Cypress._.times(5, () => {
    it('should login', () => {
      cy.contains('Home')
    })
  })
})
