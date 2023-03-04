describe('Hashtag', () => {
  it('should nav to Notifications', {defaultCommandTimeout: 10000}, () => {
    cy.stubGqlRequest('getMyTimeline', {
      fixture: 'getMyTimeline.json',
    })
    cy.stubGqlRequest('getMyProfile', {fixture: 'getMyProfile.json'})
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@getMyTimeline')

    cy.get('.relative > .text-lg').click()
    cy.url().should('include', '/notifications')
    cy.contains('No notifications yet')
  })
})
