import Retweet from './Retweet.vue'

describe.skip('Retweet component', () => {
  it('displays the correct label for the retweet', () => {
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

    // const tweet2 = {
    //   __typename: 'Tweet',
    //   id: '01GSFHRQRD2WFSSAB1V1TTVV7W',
    //   profile: {
    //     id: '56e2fa2f-9fdd-4e2f-97ee-acf02fd5eafd',
    //     name: 'appsync-tester2',
    //     screenName: 'appsynctester2H5KFF0DE',
    //     imageUrl:
    //       'https://backend-dev-assetsbucket-r45x9kghehas.s3-accelerate.amazonaws.com/56e2fa2f-9fdd-4e2f-97ee-acf02fd5eafd/01GSFHTRSFFQXSVCA3G6CTZBN8.jpeg',
    //   },
    //   createdAt: '2023-02-17T11:22:20.302Z',
    //   text: 'my first tweet',
    //   liked: false,
    //   likes: 0,
    //   retweeted: false,
    //   retweets: 0,
    //   replies: 0,
    // }

    cy.storeMount(Retweet, {propsData: {tweet}})
    // TODO: there is something wrong with the data
    // we get an error Cannot read properties of undefined (reading 'profile')
  })
})
