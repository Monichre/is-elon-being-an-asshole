import { analyzeThis } from '../open-ai/sentiment'
import { elon } from '../../constants'
import { twitter } from './client'

export const hasElonBeenAnAssholeRecently = async () => {
  const res: any = await twitter.tweets.tweetsRecentSearch({
    query: `(from: ${elon}) new`,
    expansions: ['author_id', 'attachments.media_keys', 'geo.place_id'],
    'tweet.fields': ['text', 'attachments'],
  })
  // .catch((err) => console.log('err: ', err))
  console.log('res: ', res)
  const recentTweets: any = res ? res.data : []
  console.log('recentTweets: ', recentTweets)

  const letSee: any = await Promise.all(
    recentTweets?.map(async (tweet) => {
      const { judgement } = await analyzeThis(tweet)
      console.log('judgement: ', judgement)
      return {
        judgement,
        tweet,
      }
    })
  )
  return letSee
}
