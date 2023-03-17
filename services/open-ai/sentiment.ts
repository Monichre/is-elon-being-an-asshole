import axios from 'axios'
import { tweetIt } from '../twitter/tweet'

export const analyzeThis = async (tweet) => {
  console.log('tweet: ', tweet);
// Send tweet text to OpenAI for sentiment analysis
const analysis = await axios.post(process.env.OPENAI_API_URL, {
  context: tweet.text,
  prompt: 'Is Elon being an asshole?',
  temperature: 0.5,
  max_tokens: 1,
  stop: '\n'
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});
console.log('analysis: ', analysis);

// Parse sentiment analysis results
const sentimentScore = analysis.data.choices[0].text;
const isAsshole = sentimentScore < -0.5; // Example threshold
console.log('isAsshole: ', isAsshole);

// Send response tweet from bot account
const judgement = isAsshole ? 'Elon is being an asshole' : 'Elon is not being an asshole';

await tweetIt({judgement, tweet})
return {judgement, tweet};
  
}