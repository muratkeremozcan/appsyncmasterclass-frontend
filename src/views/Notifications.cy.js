import Notifications from './Notifications.vue'

// TODO Cannot read properties of undefined (reading 'query')
describe.skip('Notifications', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Notifications)
    cy.contains('Notifications')
  })
})
