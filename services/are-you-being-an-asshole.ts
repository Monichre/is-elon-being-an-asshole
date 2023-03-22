import { analyzeTweet } from './open-ai/analyze-tweets'
import { getElonsLatestTweets } from './twitter/get-recent-tweets'
import { tweetIt } from './twitter/tweet'

export const areYouBeingAnAssholeElon = async () => {
  const latestTweets = await getElonsLatestTweets()

  if (latestTweets.length) {
    const tweet = latestTweets[0]

    const { judgement } = await analyzeTweet(tweet)
    console.log('judgement: ', judgement)

    return await tweetIt({ judgement, tweet })
  }

  return null
  // const areYou = await isElonBeingAnAsshole()

  // console.log('areYou: ', areYou)

  // await await stream.connect({ autoReconnect: true, autoReconnectRetries: Infinity });
}
