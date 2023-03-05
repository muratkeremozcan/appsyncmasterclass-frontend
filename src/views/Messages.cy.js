import Messages from './Messages.vue'

// TODO Cannot read properties of undefined (reading 'query')
describe.skip('Messages', () => {
  it('should', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.storeMount(Messages)
    cy.contains('Messages')
  })
})
