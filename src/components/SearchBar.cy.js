import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render correctly', () => {
    cy.mount(SearchBar)
    cy.get('.pl-12').should('not.be.visible')
  })
})
