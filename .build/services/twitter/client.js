"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitter = void 0;
var twitter_api_sdk_1 = require("twitter-api-sdk");
exports.twitter = new twitter_api_sdk_1.Client(process.env.TWITTER_API_BEARER_TOKEN);
//# sourceMappingURL=client.js.map