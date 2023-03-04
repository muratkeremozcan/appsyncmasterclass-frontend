import {
  getMyProfile,
  getProfileByScreenName,
  getImageUploadUrl,
  editMyProfile,
  getMyTimeline,
  tweet,
  getTweets,
  like,
  unlike,
  retweet,
  unretweet,
  reply,
  follow,
  unfollow,
  getFollowers,
  getFollowing,
  search,
  getHashTag,
  getOnNotifiedSubscription,
} from '../../../lib/backend'

export default {
  async setProfile({commit}) {
    const profile = await getMyProfile()
    commit('PROFILE_SET', profile)
  },

  async loadProfile({commit, rootState}, screenName) {
    if (!screenName) return
    if (rootState.twitter.profile.screenName == screenName) {
      const profile = await getMyProfile()
      commit('PROFILE_SET', profile)
    } else {
      const profile = await getProfileByScreenName(screenName)
      commit('PROFILE_SET', profile)
    }
  },

  async loadMyTimeline({dispatch}) {
    await dispatch('getMyTimeline', 10)
  },

  async loadTweets({dispatch, rootState}, screenName) {
    if (!screenName) return

    if (rootState.twitter.profile.screenName == screenName) {
      await dispatch('getTweets', {
        userId: rootState.twitter.profile.id,
        limit: 10,
      })
    } else {
      const profile = await getProfileByScreenName(screenName)
      await dispatch('getTweets', {userId: profile.id, limit: 10})
    }
  },

  async getMyTimeline({commit}, limit) {
    const timeline = await getMyTimeline(limit)
    commit('TWITTER_TIMELINE', timeline)
  },
  async createTweet({commit, dispatch}, {text}) {
    const newTweet = await tweet(text)
    commit('TWITTER_CREATE', newTweet)
    await dispatch('getMyTimeline', 10)
  },

  async getTweets({commit}, {userId, limit, nextToken}) {
    const tweets = await getTweets(userId, limit, nextToken)
    commit('TWITTER_TIMELINE', tweets)
  },

  async likeTweet(_, tweetId) {
    await like(tweetId)
  },
  async unlikeTweet(_, tweetId) {
    await unlike(tweetId)
  },
  async retweetTweet(_, tweetId) {
    await retweet(tweetId)
  },
  async unretweetTweet(_, tweetId) {
    await unretweet(tweetId)
  },
  async replyTweet({dispatch}, {tweetId, text}) {
    await reply(tweetId, text)
    await dispatch('getMyTimeline', 10)
  },

  async getImageUploadUrl(_, {extension, contentType}) {
    return await getImageUploadUrl(extension, contentType)
  },
  async editMyProfile({commit}, newProfile) {
    const profile = await editMyProfile(newProfile)
    commit('PROFILE_SET', profile)
    return profile
  },

  async followUser(_, profileId) {
    await follow(profileId)
  },
  async unfollowUser(_, profileId) {
    await unfollow(profileId)
  },

  async getFollowers({commit}, {userId, limit}) {
    const followers = await getFollowers(userId, limit)
    commit('TWITTER_FOLLOWERS', followers)
  },
  async getFollowing({commit}, {userId, limit}) {
    const following = await getFollowing(userId, limit)
    commit('TWITTER_FOLLOWING', following)
  },

  async loadMoreTweets({commit, getters}, limit) {
    if (!getters.nextTokenTweets) return
    const tweets = await getTweets(
      getters.profile.id,
      limit,
      getters.nextTokenTweets,
    )
    commit('TWITTER_LOADMORE_TWEETS', tweets)
  },
  async loadMoreMyTimeline({commit, getters}, limit) {
    if (!getters.nextTokenTweets) return
    const timeline = await getMyTimeline(limit, getters.nextTokenTweets)
    commit('TWITTER_LOADMORE_TWEETS', timeline)
  },

  async loadSearch({commit}, {query, mode, limit, nextToken}) {
    const searchResults = await search(query, mode, limit, nextToken)
    commit('TWITTER_SEARCH', searchResults)
  },
  resetSearch({commit}) {
    const searchResults = {
      results: [],
      nextToken: undefined,
    }
    commit('TWITTER_SEARCH', searchResults)
  },
  async loadMoreSearch({commit, getters}, {query, mode, limit}) {
    if (!getters.nextTokenSearch) return
    const searchResults = await search(
      query,
      mode,
      limit,
      getters.nextTokenSearch,
    )
    commit('TWITTER_LOADMORE_SEARCH', searchResults)
  },

  async loadSearchHashTag({commit}, {query, mode, limit, nextToken}) {
    const q = query || ' ' // mandatory
    const searchResults = await getHashTag(q, mode, limit, nextToken)
    commit('TWITTER_SEARCH_HASHTAG', searchResults)
  },
  resetSearchHashTag({commit}) {
    const searchResults = {
      results: [],
      nextToken: undefined,
    }
    commit('TWITTER_SEARCH_HASHTAG', searchResults)
  },
  async loadMoreSearchHashTag({commit, getters}, {query, mode, limit}) {
    if (!getters.nextTokenSearchHashTag) return
    const q = query || ' ' // mandatory
    const searchResults = await getHashTag(
      q,
      mode,
      limit,
      getters.nextTokenSearchHashTag,
    )
    commit('TWITTER_LOADMORE_SEARCH_HASHTAG', searchResults)
  },

  async subscribeNotifications({commit, getters, dispatch}) {
    if (!getters.profile.id || getters.subscription) return

    const userId = getters.profile.id
    const subscription = getOnNotifiedSubscription(userId).subscribe({
      next: async ({value}) => {
        const notification = value.data.onNotified
        if (notification.type !== 'DMed') {
          await dispatch('getMyTimeline', 10)
          commit('TWITTER_NOTIFICATIONS_NEW', notification)
        }
      },
    })
    commit('TWITTER_NOTIFICATIONS_SUBSCRIBE', subscription)
  },

  resetNotifications({commit}) {
    commit('TWITTER_NOTIFICATIONS_RESET')
  },
  unsubscribeNotifications({commit}) {
    commit('TWITTER_NOTIFICATIONS_UNSUBSCRIBE')
  },

  resetState({commit}) {
    commit('TWITTER_RESET_STATE')
  },
}
