import {data} from '../fixtures/getMyTimelineQuery.json'

describe('Get Tweets', () => {
  it('should see tweets', () => {
    const stubDate = Date.parse(data.getMyTimeline.tweets[0].createdAt)
    cy.clock(stubDate)
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

    cy.contains('Now')
  })
})
