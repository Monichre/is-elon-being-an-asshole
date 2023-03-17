"use strict";
// import { TwitterApi } from 'twitter-api-v2';
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitter = void 0;
// // Instantiate with desired auth type (here's Bearer v2 auth)
// export const twitter: TwitterApi = new TwitterApi(process.env.TWITTER_API_BEARER_TOKEN || '');
var twitter_api_sdk_1 = require("twitter-api-sdk");
exports.twitter = new twitter_api_sdk_1.Client(process.env.BEARER_TOKEN);
//# sourceMappingURL=client.js.map