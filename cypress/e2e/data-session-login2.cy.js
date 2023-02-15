describe('sessionLogin', () => {
  beforeEach(() =>
    cy.dataSessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD')),
  )

  Cypress._.times(2, () => {
    it('should', () => {
      cy.contains('Home')
    })
  })
})
