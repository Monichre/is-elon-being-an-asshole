// @ts-nocheck

// import { ETwitterStreamEvent } from 'twitter-api-v2'
// import { analyzeThis } from '../open-ai/sentiment'
import { elon } from '../../constants'
// import { tweetIt } from './tweet'
import { twitter } from './client'
import { isElonBeingAnAsshole } from '../../handler'

export const isElonBeingAnAsshole = async () => {
  await twitter.tweets.addOrDeleteRules({
    add: [{ value: `from:${elon}` }],
  })
  const rules = await twitter.tweets.getRules()
  console.log(rules)

  const searchStream: any = twitter.tweets.searchStream({
    expansions: ['author_id'],
    'tweet.fields': ['author_id'],
    // ids: [elon]
  })

  const latestTweets = []

  console.log('searchStream: ', searchStream)
  for await (const tweet of searchStream) {
    console.log('tweet: ', tweet)
    console.log(tweet.data?.author_id === elon)
    latestTweets.push(tweet)
  }

  if (latestTweets.length) {
    const { judgement, tweet } = await isElonBeingAnAsshole(latestTweets[0])
    console.log('judgement: ', judgement)
    console.log('tweet: ', tweet)
    return {
      judgement,
      tweet,
    }
  }

  // // stream.on(ETwitterStreamEvent.Data, analyzeThis)
  // return {stream}
}
