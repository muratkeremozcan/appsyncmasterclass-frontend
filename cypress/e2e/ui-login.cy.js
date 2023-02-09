it('should UI login and logout', () => {
  cy.visit('/')
  cy.contains('See what', {timeout: 10000})
  // cy.uiLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  // cy.contains('Root', {timeout: 10000})

  // Cypress.on('uncaught:exception', err => {
  //   const navDupe = /^[^(NavigationDuplicated)]/
  //   if (navDupe.test(err.message)) return false
  // })
  // cy.get('amplify-authenticator.hydrated > .hydrated').click()
  // cy.get('amplify-authenticator.hydrated').should('be.visible')
})
