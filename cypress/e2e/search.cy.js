describe('Search', () => {
  it('should search for a tweet', {defaultCommandTimeout: 10000}, () => {
    cy.stubGqlRequest('getMyTimeline', {
      fixture: 'getMyTimeline.json',
    })
    cy.stubGqlRequest('getMyProfile', {fixture: 'getMyProfile.json'})
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@getMyTimeline')

    cy.stubGqlRequest('search', {fixture: 'search.json'})
    cy.get('.pl-12').type(']3ZgC&J8sqsgMtcY{enter}')
    cy.wait('@search')
    cy.contains('Replying to @appsynctesterQCNAWFW5')
  })
})
