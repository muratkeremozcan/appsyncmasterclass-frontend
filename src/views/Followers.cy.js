import Followers from './Followers.vue'

// TODO Cannot read properties of undefined (reading 'name')
describe.skip('Followers', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Followers) // TODO: find out how we would manipulate data; loading: false
    cy.contains('Followers')
    cy.contains('Following')
  })
})
