describe('Login', () => {
  it('should alert with an error on invalid login', () => {
    cy.visit('/')

    Cypress.on('uncaught:exception', err => {
      const navDupe = /^[^(NavigationDuplicated)]/
      if (navDupe.test(err.message)) return false
    })
    cy.window().then(win => cy.stub(win, 'alert').as('alert'))
    cy.intercept('POST', 'https://cognito-idp.eu-west-1.amazonaws.com').as(
      'login',
    )

    cy.get('.w-1\\/2 > :nth-child(1) > .bg-lightblue')
      .clear()
      .type('a', {delay: 0})
    cy.get(':nth-child(2) > .bg-lightblue').clear().type('b', {delay: 0})
    cy.get('.self-center > .font-bold').click()
    cy.wait('@login')
    cy.get('@alert').should(
      'be.calledWith',
      'Error signing in, please check console for error detail',
    )
  })

  it('should login with valid credentials', () => {
    cy.uiLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.get('.relative > .flex').should('contain', 'appsync-tester').click()
    cy.get('.absolute > :nth-child(3)').click()
    cy.contains("See what's happening")
  })
})
