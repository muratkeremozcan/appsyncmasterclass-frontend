describe('Get Tweets', () => {
  it('should see tweets', () => {
    cy.intercept('POST', Cypress.env('API_URL'), req => {
      if (req.body.query.includes('getMyTimeline')) {
        console.log(req.body.query)
        req.alias = `getMyTimelineQuery`
        return req.reply({
          fixture: 'getMyTimelineQuery.json',
        })
      }
    }).as('gql')

    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))

    cy.wait('@getMyTimelineQuery')

    cy.get('.p-4').should('have.length', 2)
  })
})
