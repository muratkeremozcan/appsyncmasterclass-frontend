it('should UI login and logout', () => {
  cy.uiLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  cy.contains('Root', {timeout: 10000})

  cy.get('amplify-authenticator.hydrated > .hydrated').click()
  cy.get('amplify-authenticator.hydrated').should('be.visible')
})
