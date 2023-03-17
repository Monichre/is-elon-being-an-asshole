"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElonBeingAnAsshole = void 0;
// import { ETwitterStreamEvent } from 'twitter-api-v2'
// import { analyzeThis } from '../open-ai/sentiment'
var constants_1 = require("../../constants");
// import { tweetIt } from './tweet'
var client_1 = require("./client");
var handler_1 = require("../../handler");
var isElonBeingAnAsshole = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rules, searchStream, latestTweets, _a, searchStream_1, searchStream_1_1, tweet, e_1_1, _b, judgement, tweet;
    var _c, e_1, _d, _e;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, client_1.twitter.tweets.addOrDeleteRules({
                    add: [{ value: "from:".concat(constants_1.elon) }],
                })];
            case 1:
                _g.sent();
                return [4 /*yield*/, client_1.twitter.tweets.getRules()];
            case 2:
                rules = _g.sent();
                console.log(rules);
                searchStream = client_1.twitter.tweets.searchStream({
                    expansions: ['author_id'],
                    'tweet.fields': ['author_id'],
                    // ids: [elon]
                });
                latestTweets = [];
                console.log('searchStream: ', searchStream);
                _g.label = 3;
            case 3:
                _g.trys.push([3, 8, 9, 14]);
                _a = true, searchStream_1 = __asyncValues(searchStream);
                _g.label = 4;
            case 4: return [4 /*yield*/, searchStream_1.next()];
            case 5:
                if (!(searchStream_1_1 = _g.sent(), _c = searchStream_1_1.done, !_c)) return [3 /*break*/, 7];
                _e = searchStream_1_1.value;
                _a = false;
                try {
                    tweet = _e;
                    console.log('tweet: ', tweet);
                    console.log(((_f = tweet.data) === null || _f === void 0 ? void 0 : _f.author_id) === constants_1.elon);
                    latestTweets.push(tweet);
                }
                finally {
                    _a = true;
                }
                _g.label = 6;
            case 6: return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 14];
            case 8:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 9:
                _g.trys.push([9, , 12, 13]);
                if (!(!_a && !_c && (_d = searchStream_1.return))) return [3 /*break*/, 11];
                return [4 /*yield*/, _d.call(searchStream_1)];
            case 10:
                _g.sent();
                _g.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 13: return [7 /*endfinally*/];
            case 14:
                if (!latestTweets.length) return [3 /*break*/, 16];
                return [4 /*yield*/, (0, exports.isElonBeingAnAsshole)(latestTweets[0])];
            case 15:
                _b = _g.sent(), judgement = _b.judgement, tweet = _b.tweet;
                console.log('judgement: ', judgement);
                console.log('tweet: ', tweet);
                return [2 /*return*/, {
                        judgement: judgement,
                        tweet: tweet,
                    }];
            case 16: return [2 /*return*/];
        }
    });
}); };
exports.isElonBeingAnAsshole = isElonBeingAnAsshole;
//# sourceMappingURL=get-tweet-stream.js.map