describe('Tweet', () => {
  it('should tweet', () => {
    cy.intercept('POST', Cypress.env('API_URL'), req => {
      if (req.body.query.includes('getMyTimeline')) {
        req.alias = `getMyTimelineQuery` // this does not take effect!
        return req.reply({
          fixture: 'getMyTimelineQuery.json',
        })
      }
    }).as('gql') // have to alias it here

    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@gql') // but, we can't distinguish between the two requests, the first is getMyProfileQuery
    cy.wait('@gql') // the 2nd is getMyTimelineQuery
      .its('response.body.data.getMyTimeline.tweets')
      .should('have.length', 2)

    cy.get('.p-4').should('have.length', 2)
  })
})
