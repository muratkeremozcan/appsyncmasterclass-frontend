import DefaultRightBar from './DefaultRightBar'

describe('DefaultRightBar', () => {
  it('should render correctly', () => {
    cy.storeMount(DefaultRightBar)

    cy.contains('Who to follow')
    cy.contains('Trends for you')
  })
})
