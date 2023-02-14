import SideNav from './SideNav.vue'

describe('SideNav component', () => {
  it('should', () => {
    cy.storeMount(SideNav)
    cy.get('.fab').should('be.visible')
  })
})
