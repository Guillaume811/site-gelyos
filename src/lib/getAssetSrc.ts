/* Function getAssetSrc
 * Logic:
 * - Accepts a value that can be a direct URL string or a static asset object.
 * - Returns a plain string URL for <img src> usage in both Vite and Next runtimes.
 *
 * Output:
 * - A resolved image URL string.
 * - An empty string when the value is not a supported asset source.
 */
export function getAssetSrc(source: unknown): string {
  if (typeof source === 'string') {
    return source
  }

  if (source && typeof source === 'object' && 'src' in source) {
    const nestedSource = (source as { src?: unknown }).src
    if (typeof nestedSource === 'string') {
      return nestedSource
    }
  }

  return ''
}
