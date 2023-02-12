import SideNav from './SideNav'

describe('SideNav', () => {
  it('should render correctly', () => {
    cy.mount(SideNav)

    cy.get('.fab').should('be.visible')
    cy.get('.text-white > .fas').should('be.visible')
  })
})
