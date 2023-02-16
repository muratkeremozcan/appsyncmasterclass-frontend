import Tweets from './Tweets.vue'

describe('Tweets component', () => {
  it('should render', () => {
    cy.storeMount(Tweets)
    // TODO: this component has 3 child components, figure out why nothing renders
  })
})
