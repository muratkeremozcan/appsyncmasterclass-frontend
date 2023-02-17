import Followers from './Followers.vue'

describe('Followers', () => {
  it('should', () => {
    cy.storeMount(Followers)
    cy.contains('Followers')
    cy.contains('Following')
    cy.contains('No results')
  })
})
