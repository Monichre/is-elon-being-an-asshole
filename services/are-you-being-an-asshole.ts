import { hasElonBeenAnAssholeRecently } from './twitter/get-recent-tweets'
import { isElonBeingAnAsshole } from './twitter/get-tweet-stream'

export const letsFindOut = async () => {
  const haveYouBeen = await hasElonBeenAnAssholeRecently()
  const areYou = await isElonBeingAnAsshole
  console.log('haveYouBeen: ', haveYouBeen)
  console.log('areYou: ', areYou)

  // await await stream.connect({ autoReconnect: true, autoReconnectRetries: Infinity });
}
