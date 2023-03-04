import SideNav from './SideNav.vue'

// TODO Cannot read properties of undefined (reading 'name')
describe.skip('SideNav component', () => {
  it('should', () => {
    cy.storeMount(SideNav)
  })
})
