// import { TwitterApi } from 'twitter-api-v2';

// // Instantiate with desired auth type (here's Bearer v2 auth)
// export const twitter: TwitterApi = new TwitterApi(process.env.TWITTER_API_BEARER_TOKEN || '');

import { Client } from "twitter-api-sdk";

export const twitter = new Client(process.env.BEARER_TOKEN as string);
