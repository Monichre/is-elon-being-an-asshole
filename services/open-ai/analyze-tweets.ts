import { openai } from './sentiment'

export const analyzeTweet = async (tweet) => {
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
    .then((res) => {
      console.log('res: ', res?.data.choices[0]?.text)
      console.log('res?.data.choices[0]: ', res?.data.choices[0])
      console.log('res?.data.choices: ', res?.data.choices)
      // { data: { choices } }

      return res?.data?.choices[0]?.text.trim()
    })
    .catch((err) => {
      console.log(err.data)
    })

  // const category = await

  console.log('analysis: ', analysis)
  const isAsshole = !analysis.includes('Positive') || analysis !== 'Positive'
  console.log('isAsshole: ', isAsshole)

  // Send response tweet from bot account
  const judgement = isAsshole
    ? 'Elon is being an asshole'
    : 'Elon is not being an asshole'

  // await tweetIt({ judgement, tweet })
  return { judgement, tweet }
}

export const categorizeTweet = async (tweet) => {
  const category = await openai
    .createCompletion({
      model: 'text-davinci-003',
      prompt: `Categorize this text.\n\Text: ${tweet.text}\nCategory:`,
      max_tokens: 7,
      temperature: 0,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
      stop: '\n',
    })
    .then((res) => {
      console.log('res: ', res)
      return res
    })
    .catch((err) => {
      console.log('err in openai: ', err)
    })

  // await tweetIt({ judgement, tweet })
  return { category }
}
