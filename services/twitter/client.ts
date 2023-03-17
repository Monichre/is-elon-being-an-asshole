// @ts-nocheck

import { Client } from 'twitter-api-sdk'

export const twitter = new Client(
  process.env.TWITTER_API_BEARER_TOKEN as string
)
