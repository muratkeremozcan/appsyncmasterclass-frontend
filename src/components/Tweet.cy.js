import Tweet from './Tweet.vue'

describe('Tweet component', () => {
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

  it('displays tweet content', () => {
    cy.mount(Tweet, {propsData: {tweet}})

    cy.get('.font-semibold').should('contain', tweet.profile.name)
    cy.contains(tweet.profile.screenName)
    cy.contains(tweet.createdAt)
    cy.contains(tweet.text)
    cy.contains(tweet.profile.name)
    cy.contains(tweet.likes)
    cy.contains(tweet.retweets)
    cy.contains(tweet.replies)
  })
})
