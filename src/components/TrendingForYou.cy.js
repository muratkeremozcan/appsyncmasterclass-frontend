import TrendingForYou from './TrendingForYou'

describe('TrendingForYou', () => {
  it('should render correctly', () => {
    cy.mount(TrendingForYou)
    cy.get('.rounded-lg >').should('have.length.gt', 0)
  })
})
