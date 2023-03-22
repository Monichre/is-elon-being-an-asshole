import { elon } from '../../constants'
import { twitter } from './client'

export const getElonsLatestTweets = async () => {
  const res: any = await twitter.tweets.tweetsRecentSearch({
    query: `(from: ${elon}) new`,
    expansions: ['author_id', 'attachments.media_keys', 'geo.place_id'],
    'tweet.fields': ['text', 'attachments'],
  })

  const recentTweets: any = res ? res.data : []
  console.log('recentTweets: ', recentTweets)
  return recentTweets
}
