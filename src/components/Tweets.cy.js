import Tweets from './Tweets.vue'

describe('Tweets component', () => {
  it('should render', () => {
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
    const tweet2 = {
      id: '01GS5EFDXYR3C4JAYCMT12345',
      profile: {
        id: 'd05125a9-7f75-4daf-911d-13434418ed12',
        name: 'appsync-tester2',
        screenName: 'appsynctester2H5KFF0DE',
        imageUrl: null,
      },
      createdAt: '2023-02-14T13:12:25.278Z',
      text: 'delete2',
      liked: true,
      likes: 1,
      retweeted: true,
      retweets: 1,
      replies: 1,
    }

    cy.storeMount(Tweets, {
      propsData: {
        tweets: [tweet, tweet2],
      },
    })

    cy.contains(tweet.profile.name)
    cy.contains(tweet.profile.screenName)
    cy.contains(tweet.text)
    cy.contains(tweet.createdAt)
    cy.contains(tweet2.profile.name)
    cy.contains(tweet2.profile.screenName)
    cy.contains(tweet2.text)
    cy.contains(tweet2.createdAt)
  })
})
