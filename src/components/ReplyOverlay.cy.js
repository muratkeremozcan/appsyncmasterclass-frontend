import ReplyOverlay from './ReplyOverlay.vue'
const tweet = {
  id: '01GS5EFDXYR3C4JAYCMTR3CQXX',
  profile: {
    id: 'd05125a9-7f75-4daf-911d-13434418ed89',
    name: 'appsync-tester',
    screenName: 'appsynctesterQCNAWFW5',
    imageUrl: null,
  },
  createdAt: '2023-02-13T13:12:25.278Z',
  text: 'delete1',
  liked: true,
  likes: 3,
  retweeted: true,
  retweets: 5,
  replies: 4,
}
describe('ReplyOverlay component', {viewportWidth: 800}, () => {
  it('should render the data and toggle Reply opacity on typing', () => {
    cy.storeMount(ReplyOverlay, {
      propsData: {
        showReplyOverlay: true,
        tweet,
      },
    })

    cy.contains(tweet.profile.name)
    cy.contains(tweet.profile.screenName)
    cy.contains(tweet.text)

    cy.get('.h-10').should('have.css', 'opacity', '0.5')
    cy.get('.relative > .w-full').type('42')
    cy.get('.h-10').should('have.css', 'opacity', '1')
  })
})
