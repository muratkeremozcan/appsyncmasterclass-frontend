import Users from './Users.vue'

describe('Users component', () => {
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
    const user2 = {
      id: 'd05125a9-7f75-4daf-911d-13434418ed89',
      name: 'appsync-tester2',
      screenName: 'appsynctester2H5KFF0DE',
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
    cy.storeMount(Users, {
      propsData: {
        users: [user, user2],
      },
    })

    cy.contains(user.name)
    cy.contains(user.screenName)
    cy.contains(user2.name)
    cy.contains(user2.screenName)
    cy.contains('Follow')
  })
})
