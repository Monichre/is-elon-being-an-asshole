import { initStream } from './twitter/stream'

export const areYouBeingAnAssholeElon = async () => {
  await initStream()
  
  // await await stream.connect({ autoReconnect: true, autoReconnectRetries: Infinity });
}