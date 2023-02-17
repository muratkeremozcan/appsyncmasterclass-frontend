import Following from './Following.vue'

describe('Following', () => {
  it('should', () => {
    cy.storeMount(Following)
    cy.contains('Following')
    cy.contains('Following')
    cy.contains('No results')
  })
})
