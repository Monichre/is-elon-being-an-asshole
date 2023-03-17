import { tweetIt } from '../twitter/tweet'

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export const analyzeThis = async (tweet) => {
  const analysis = await openai
    .createCompletion({
      model: 'text-davinci-003',
      prompt: `Decide whether a Tweet's sentiment is positive, neutral, or negative.\n\nTweet: ${tweet.text}\nSentiment:`,
      max_tokens: 7,
      temperature: 0,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
      stop: '\n',
    })
    .then(({ data: { choices } }) => {
      const { text } = choices.pop()

      return text
    })
    .catch((err) => {
      console.log('err in openai: ', err)
    })

  const isAsshole = analysis !== 'Positive'

  // Send response tweet from bot account
  const judgement = isAsshole
    ? 'Elon is being an asshole'
    : 'Elon is not being an asshole'

  // await tweetIt({ judgement, tweet })
  return { judgement, tweet }
}
