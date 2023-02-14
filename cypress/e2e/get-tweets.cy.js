import {data} from '../fixtures/getMyTimelineQuery.json'

describe('Get Tweets', () => {
  beforeEach(() => {
    const stubDate = Date.parse(data.getMyTimeline.tweets[0].createdAt)
    cy.clock(stubDate)
    cy.intercept('POST', Cypress.env('API_URL'), req => {
      if (req.body.query.includes('getMyTimeline')) {
        req.alias = `getMyTimelineQuery`
        return req.reply({
          fixture: 'getMyTimelineQuery.json',
        })
      }
    }).as('gql')

    cy.progLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))

    cy.wait('@getMyTimelineQuery')
  })
  it('should see tweets', () => {
    cy.get('.p-4').should('have.length', 2)

    cy.contains('Now')
  })

  it('should reply to a tweet', () => {
    cy.get(
      ':nth-child(1) > .p-4 > :nth-child(2) > :nth-child(3) > :nth-child(1) > .mr-2 > .far',
    ).click()

    cy.intercept('POST', Cypress.env('API_URL'), req => {
      if (req.body.query.includes('reply')) {
        req.alias = `replyMutation`
        return req.reply({
          statusCode: 200,
        })
      }
    })
    cy.get('.modal-main').should('be.visible')
    cy.get('.mb-2 > .relative > .w-full').click()
    cy.get('.mb-2 > .relative > .h-10').click()

    cy.wait('@replyMutation')
  })
})
