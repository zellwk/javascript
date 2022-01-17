import path from 'path'
import { fileURLToPath } from 'url'

/**
 * Returns __dirname
 * @param url — import.meta.url
 * @returns
 */
export default function dirname (url) {
  if (!url) throw Error("Please provide 'import.meta.url' to dirname")
  return path.dirname(fileURLToPath(url))
}
