import Loader from './Loader'

describe('Loader', () => {
  it('should render correctly', () => {
    cy.storeMount(Loader, {propsData: {loading: true}})
    cy.get('svg').should('be.visible')
  })
})
