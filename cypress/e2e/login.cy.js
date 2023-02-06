describe('Login', () => {
  it('should login and logout', () => {
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.contains('Hey')

    cy.get('amplify-authenticator.hydrated > div > .hydrated').click()
    cy.get('amplify-authenticator.hydrated').should('be.visible')
  })
})
