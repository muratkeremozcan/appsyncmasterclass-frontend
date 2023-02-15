import Tweets from './Tweets.vue'

describe('Tweets component', () => {
  it('should', () => {
    const tweet = {
      id: '01GSAGX37CYGDBVH4C764B85RV',
      profile: {
        id: '2691ab2b-eecd-46ba-98eb-03758f8575ea',
        name: 'Emily Tran snpt',
        screenName: 'EmilyTransnptONEV64ZO',
        imageUrl: null,
        backgroundImageUrl: null,
        bio: null,
        location: null,
        website: null,
        birthdate: null,
        createdAt: '2023-02-15T12:30:45.131Z',
        followersCount: 1,
        followingCount: 1,
        tweetsCount: 2,
        likesCounts: 0,
        following: true,
        followedBy: true,
      },
      createdAt: '2023-02-15T12:31:02.381Z',
      text: 'Qo9[Eb)rBYrMnl98',
      replies: 0,
      likes: 0,
      retweets: 0,
      retweeted: false,
      liked: false,
    }

    cy.storeMount(Tweets, {propsData: {tweet}})
    // TODO: this component has 3 child components, figure out why nothing renders
  })
})
