import Profile from './Profile.vue'

// TODO Cannot read properties of undefined (reading 'name')
describe.skip('Profile', () => {
  it('should', () => {
    cy.storeMount(Profile)
    cy.contains('Profile')
  })
})
