"use strict";
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
exports.initStream = void 0;
var client_1 = require("./client");
var elon = '44196397';
var initStream = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rules, searchStream, _a, searchStream_1, searchStream_1_1, tweet, e_1_1;
    var _b, e_1, _c, _d;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: 
            // const stream = await twitter.tweets.searchStream({
            //   "tweet.fields": ["author_id"],
            // });
            // for await (const tweet of stream) {
            //   console.log('tweet: ', tweet);
            //   console.log(tweet.data?.author_id === elon);
            // }
            return [4 /*yield*/, client_1.twitter.tweets.addOrDeleteRules({
                    add: [
                        { value: "from:".concat(elon) }
                    ]
                })];
            case 1:
                // const stream = await twitter.tweets.searchStream({
                //   "tweet.fields": ["author_id"],
                // });
                // for await (const tweet of stream) {
                //   console.log('tweet: ', tweet);
                //   console.log(tweet.data?.author_id === elon);
                // }
                _f.sent();
                return [4 /*yield*/, client_1.twitter.tweets.getRules()];
            case 2:
                rules = _f.sent();
                console.log(rules);
                searchStream = client_1.twitter.tweets.searchStream({
                    expansions: [
                        'author_id'
                    ],
                    "tweet.fields": ["author_id"]
                    // ids: [elon]
                });
                console.log('searchStream: ', searchStream);
                _f.label = 3;
            case 3:
                _f.trys.push([3, 8, 9, 14]);
                _a = true, searchStream_1 = __asyncValues(searchStream);
                _f.label = 4;
            case 4: return [4 /*yield*/, searchStream_1.next()];
            case 5:
                if (!(searchStream_1_1 = _f.sent(), _b = searchStream_1_1.done, !_b)) return [3 /*break*/, 7];
                _d = searchStream_1_1.value;
                _a = false;
                try {
                    tweet = _d;
                    console.log('tweet: ', tweet);
                    console.log(((_e = tweet.data) === null || _e === void 0 ? void 0 : _e.author_id) === elon);
                }
                finally {
                    _a = true;
                }
                _f.label = 6;
            case 6: return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 14];
            case 8:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 9:
                _f.trys.push([9, , 12, 13]);
                if (!(!_a && !_b && (_c = searchStream_1.return))) return [3 /*break*/, 11];
                return [4 /*yield*/, _c.call(searchStream_1)];
            case 10:
                _f.sent();
                _f.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 13: return [7 /*endfinally*/];
            case 14: return [2 /*return*/];
        }
    });
}); };
exports.initStream = initStream;
//# sourceMappingURL=stream.js.map