import WhoToFollow from './WhoToFollow'

describe('WhoToFollow', () => {
  it('should render correctly', () => {
    cy.mount(WhoToFollow)
    cy.get('.rounded-lg >').should('have.length.gt', 0)
  })
})
