// Detects whether environment is node or browser.
// This is important because the algorithm is different for each environment
let env
if (typeof window === 'object') env = 'browser'
if (typeof global === 'object') env = 'node'

/**
 * Generates an object with PKCE parameters.
 * @returns object with the following properties:
 *  code_verifier: string
 *  code_challenge_method: string
 *  code_challenge: string | promise.
 * Note: code_challenge is a string in Node, promise in browser
 */
function pkce () {
  const codeVerifier = getCodeVerifier()

  let codeChallenge
  if (env === 'browser') codeChallenge = getCodeChallengeInBrowser(codeVerifier)
  if (env === 'node') codeChallenge = getCodeChallengeInNode(codeVerifier)

  return {
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  }
}

/**
 * Generates a code verifier for PKCE
 * @returns {string}
 */
function getCodeVerifier () {
  if (env === 'browser') {
    return crypto.getRandomValues(new Uint32Array(5)).join('')
  }

  if (env === 'node') {
    return require('crypto')
      .randomBytes(32)
      .toString('base64')
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
  return btoa(String.fromCharCode.apply(null, new Uint8Array(hashed)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

/**
 * Generates code challenge in node
 * @param {string} verifier
 * @returns string
 */
function getCodeChallengeInNode (verifier) {
  // Hash to code verifier with SHA-256
  const hash = require('crypto')
    .createHash('sha256')
    .update(verifier)
    .digest()

  // Base64url encode the hash
  return hash
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}
