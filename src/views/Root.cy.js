import Root from './Root.vue'

describe('Root', () => {
  it('should', () => {
    cy.mount(Root)
    cy.contains('h1', 'Root')
  })
})
