// WIP. Not ready yet.
import PKCE from './pkce.js'
import querystring from 'querystring'
import zlFetch from 'zl-fetch'

/**
 * Generates a Twitter Auth Client
 */
function Twitter (auth) {
  const pkce = await PKCE()

  return {
    /**
     * Generates a Twitter Sign-in Link
     * Required params:
     *  - redirect_uri
     *  - scope
     * Returns a string
     */
    getLink (params) {
      const query = Object.assign(
        {
          response_type: 'code',
          client_id: auth.client_id,
          redirect_uri: params.redirect_uri,
          scope: params.scope,
          state: pkce.state,
          code_challenge: pkce.code_challenge,
          code_challenge_method: pkce.code_challenge_method
        },
        params
      )

      const q = querystring.stringify(query)
      const link = `https://twitter.com/i/oauth2/authorize?${q}`
      return link
    },

    /**
     * Fetches access token from Twitter
     * Required params:
     *  - code
     *  - redirect_uri
     * Returns a promise that resolves to an object with access_token and token_type
     */

    async getAccessToken (params) {
      const response = await zlFetch.post(
        'https://api.twitter.com/2/oauth2/token',
        {
          auth: {
            username: auth.client_id,
            password: auth.client_secret
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: {
            grant_type: 'authorization_code',
            code: params.code,
            client_id: auth.client_id,
            redirect_uri: params.redirect_uri,
            code_verifier: pkce.code_verifier
          }
        }
      )

      return response.body
    }
  }
}
