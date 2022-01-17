// Browser or Server Environment Context
export default function EnvCtx () {
  if (typeof window === 'object') return 'browser'
  if (typeof global === 'object') return 'node'
}
