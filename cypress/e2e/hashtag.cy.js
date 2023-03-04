describe('Hashtag', () => {
  it('should show hashtags on ', {defaultCommandTimeout: 10000}, () => {
    cy.stubGqlRequest('getMyTimeline', {
      fixture: 'hashtag.json',
    })
    cy.stubGqlRequest('getMyProfile', {fixture: 'getMyProfile.json'})
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@getMyTimeline')

    cy.get('[href="http://vuejs.org"]').should('be.visible')
    cy.get('[href="#/appsynctester2H5KFF0DE"]').should('be.visible')
    cy.get('[href*="#/hashtag"]').should('be.visible')
  })
})
