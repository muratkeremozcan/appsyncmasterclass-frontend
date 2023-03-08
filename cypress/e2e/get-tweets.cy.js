import {data} from '../fixtures/getMyTimeline.json'

describe('Get Tweets', () => {
  beforeEach(() => {
    cy.clock(Date.parse(data.getMyTimeline.tweets[0].createdAt))
    cy.stubGqlRequest('getMyTimeline', {
      fixture: 'getMyTimeline.json',
    })
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@getMyTimeline')
  })
  it('should see tweets', () => {
    cy.get('.p-2').should('have.length.gte', 2)
    cy.contains('Now')
  })

  it('should reply to a tweet', () => {
    cy.get(
      ':nth-child(1) > .p-2 > :nth-child(2) > :nth-child(3) > :nth-child(1) > .mr-2 > .far',
    ).click()
    cy.stubGqlRequest('reply', {
      statusCode: 200,
    })
    cy.get('.modal-main').should('be.visible')
    cy.get('.mb-2 > .relative > .w-full').click()
    cy.get('.mb-2 > .relative > .h-10').click()

    cy.wait('@reply')
  })
})
