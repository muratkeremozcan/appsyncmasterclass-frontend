import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('should mount with greeting', () => {
    cy.mount(HelloWorld)
    cy.get('p')
  })
})
