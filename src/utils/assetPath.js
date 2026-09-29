const externalAssetPattern = /^(?:[a-z]+:|\/\/)/i

export function assetPath(path) {
  if (!path || externalAssetPattern.test(path)) return path

  const basePath = import.meta.env.BASE_URL || '/'
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`

  return `${normalizedBase}${path.replace(/^\/+/, '')}`
}
