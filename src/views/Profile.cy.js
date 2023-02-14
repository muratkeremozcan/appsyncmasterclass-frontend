import Profile from './Profile.vue'

describe('Profile', () => {
  it('should', () => {
    cy.storeMount(Profile)
    cy.contains('Profile')
  })
})
