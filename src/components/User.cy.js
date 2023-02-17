import User from './User.vue'

describe('User component', () => {
  it('should ', () => {
    const user = {
      id: 'd05125a9-7f75-4daf-911d-13434418ed89',
      name: 'appsync-tester',
      screenName: 'appsynctesterQCNAWFW5',
      imageUrl: null,
      backgroundImageUrl: null,
      bio: null,
      location: null,
      website: null,
      birthdate: null,
      createdAt: '2023-02-06T14:32:16.594Z',
      followersCount: 0,
      followingCount: 0,
      tweetsCount: 7,
      likesCounts: 0,
    }
    cy.storeMount(User, {
      propsData: {
        user,
      },
    })

    cy.contains(user.name)
    cy.contains(user.screenName)
    cy.contains('Follow')
  })
})
