import DefaultRightBar from './DefaultRightBar'

describe.skip('DefaultRightBar', () => {
  it('should render correctly', () => {
    cy.storeMount(DefaultRightBar)
    // TODO: this component has 3 child components, figure out why nothing renders
  })
})
