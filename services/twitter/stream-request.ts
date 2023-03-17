import axios from 'axios'

const streamURL = new URL(
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id"
);
const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), delay));
};
let timeout = 0;


const BEARER_TOKEN: any = process.env.TWITTER_BEARER_TOKEN;

const reconnect = async (stream) => {
  timeout++;
  stream.abort();
  await sleep(2 ** timeout * 1000);
  streamTweets();
};



const streamTweets = async () => {
  let stream;

  const config:any = {
    url: streamURL,
    auth: {
      bearer: BEARER_TOKEN,
    },
    timeout: 31000,
  };

  try {
    const stream:any = await axios.get(config);

    stream.on("data", (data) => {
        try {
          const json = JSON.parse(data);
          if (json.connection_issue) {
            
            reconnect(stream);
          } else {
            if (json.data) {
              
            } else {
              // socket.emit("authError", json);
            }
          }
        } catch (e) {
          // socket.emit("heartbeat");
        }
      })
      .on("error", (error) => {
        // Connection timed out
        // socket.emit("error", errorMessage);
        reconnect(stream);
      });
  } catch (e) {
    // socket.emit("authError", authMessage);
  }
};
