import EnvCtx from './env.js'
const envCtx = EnvCtx()

export async function randomString () {
  if (envCtx === 'browser') {
    return crypto.getRandomValues(new Uint32Array(5)).join('')
  }

  if (envCtx === 'node') {
    const crypto = await import('crypto')
    return crypto.randomBytes(32).toString('base64')
  }
}
