import getEnv from './env.js'
const env = getEnv()

export async function randomString() {
  if (env === 'browser') {
    return crypto.getRandomValues(new Uint32Array(5)).join('')
  }

  if (env === 'node') {
    const crypto = await import('crypto')
    return crypto.randomBytes(32).toString('base64')
  }
}
