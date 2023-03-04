import Following from './Following.vue'

// TODO Cannot read properties of undefined (reading 'name')
describe.skip('Following', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Following)
    cy.contains('Following')
    cy.contains('Following')
  })
})
