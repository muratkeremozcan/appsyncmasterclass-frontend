import Following from './Following.vue'

describe('Following', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Following)
    cy.contains('Following')
    cy.contains('Following')
  })
})
