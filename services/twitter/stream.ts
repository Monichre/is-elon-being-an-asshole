import { ETwitterStreamEvent } from 'twitter-api-v2'
import { analyzeThis } from '../open-ai/sentiment'
import { tweetIt } from './tweet'
import { twitter } from './client'

const elon = '44196397'

export const initStream = async () => {
  // const stream = await twitter.tweets.searchStream({
  //   "tweet.fields": ["author_id"],
  // });

  // for await (const tweet of stream) {
  //   console.log('tweet: ', tweet);
  //   console.log(tweet.data?.author_id === elon);
  // }
  await twitter.tweets.addOrDeleteRules({
    add: [
      {value: `from:${elon}`}
    ]
  })
  const rules = await twitter.tweets.getRules();
  console.log(rules);

  const searchStream: any =  twitter.tweets.searchStream({
    
    expansions: [
      
      'author_id'
    ],
    "tweet.fields": ["author_id"]
    // ids: [elon]
  })
  
  console.log('searchStream: ', searchStream);
  for await (const tweet of searchStream) {
    console.log('tweet: ', tweet);
    console.log(tweet.data?.author_id === elon);
  }
  
  // // stream.on(ETwitterStreamEvent.Data, analyzeThis)
  // return {stream}
  

}



