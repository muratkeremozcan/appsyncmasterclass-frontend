import NewMessageOverlay from './NewMessageOverlay'

it('should render correctly', () => {
  Cypress.on('uncaught:exception', () => false)
  cy.storeMount(NewMessageOverlay, {propsData: {showNewMessageModal: true}})
  cy.get('svg').should('be.visible')
  cy.contains('New message')
})
