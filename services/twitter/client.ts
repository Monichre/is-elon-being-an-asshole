// @ts-nocheck
import { Client } from 'twitter-api-sdk'

export const twitter = new Client(
  process.env.TWITTER_API_BEARER_TOKEN as string)
  
//   {
//   apiKey: process.env.TWITTER_API_KEY,
//   apiSecret: process.env.TWITTER_API_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// })

// const authClient = new auth.OAuth2User({
//   client_id: process.env.CLIENT_ID as string,
//   client_secret: process.env.CLIENT_SECRET as string,
//   callback: "http://127.0.0.1:3000/callback",
//   scopes: ["tweet.read", "users.read", "offline.access"],
// });
//   process.env.TWITTER_API_BEARER_TOKEN as string
// export const twitterClient = 