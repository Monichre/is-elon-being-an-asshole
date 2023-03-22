import { twitter } from './client'

export const tweetIt = async ({ judgement, tweet: originalTweet }: any) => {
  const tweet = await twitter.tweets
    .createTweet({
      text: `${judgement}`,
    })
    .catch((err) => {
      console.log('err: ', err)
    })
  // @${tweet.user.screen_name}

  console.log('tweet: ', tweet)
  return tweet
}
