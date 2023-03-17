import { twitter } from './client'

export const tweetIt = async ({judgement, tweet }) => {
  
  const retweet = await twitter.v2.quote(judgement,  tweet.id,  tweet.text);
  console.log('retweet: ', retweet);
  return retweet

}