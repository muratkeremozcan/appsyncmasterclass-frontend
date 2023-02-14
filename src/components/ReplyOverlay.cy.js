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
describe('ReplyOverlay component', () => {
  it('should', () => {
    cy.storeMount(ReplyOverlay, {
      propsData: {
        showReplyOverlay: true,
        tweet,
      },
    })
  })
})
