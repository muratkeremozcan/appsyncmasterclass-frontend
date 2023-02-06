it('should UI login and logout', () => {
  cy.uiLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  cy.contains('Hey', {timeout: 10000})

  cy.get('amplify-authenticator.hydrated > div > .hydrated').click()
  cy.get('amplify-authenticator.hydrated').should('be.visible')
})
