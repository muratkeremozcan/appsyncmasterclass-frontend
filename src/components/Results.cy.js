import Results from './Results'

describe('Results', () => {
  it('should render correctly', () => {
    const results = [
      {
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
      },
    ]

    cy.storeMount(Results, {propsData: {results}})

    cy.get('.font-semibold').should('contain', results[0].profile.name)
    cy.contains(results[0].profile.screenName)
    cy.contains(results[0].createdAt)
    cy.contains(results[0].text)
    cy.contains(results[0].profile.name)
  })
})
