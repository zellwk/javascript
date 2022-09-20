import Env from './env.js'
import { randomString } from './random.js'

const env = Env()

/**
 * Generates an object with PKCE parameters.
 * @returns Promise that resolves to an object with the following properties:
 *  - state: string
 *  - code_verifier: string
 *  - code_challenge_method: string
 *  - code_challenge: string .
 */
export default async function PKCE () {
  const codeVerifier = await randomString()
  const codeChallenge = await getCodeChallenge(codeVerifier)

  return {
    state: await randomString(),
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  }
}

async function getCodeChallenge (verifier) {
  if (env === 'browser') {
    return getCodeChallengeInBrowser(verifier)
  }
  if (env === 'node') {
    return getCodeChallengeInNode(verifier)
  }
}

/**
 * Generates code challenge in browser
 * @param {string} verifier
 * @returns promise
 */
async function getCodeChallengeInBrowser (verifier) {
  // Hash the code verifier with SHA-256
  const encoder = new TextEncoder()
  const data = encoder.encode(verifier)
  const hashed = await window.crypto.subtle.digest('SHA-256', data)

  // Base64url encode the hash
  return window
    .btoa(String.fromCharCode.apply(null, new Uint8Array(hashed)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

/**
 * Generates code challenge in node
 * @param {string} verifier
 * @returns string
 */
async function getCodeChallengeInNode (verifier) {
  // Hash to code verifier with SHA-256
  const crypto = await import('crypto')
  const hash = crypto
    .createHash('sha256')
    .update(verifier)
    .digest()

  // // Base64url encode the hash
  return hash
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}
