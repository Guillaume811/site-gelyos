import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description?: string
  /**
   * Chemin ou URL absolue vers la page.
   * Si chemin relatif, il sera préfixé par VITE_SITE_URL s'il est fourni.
   */
  canonical?: string
  /** Alias pour canonical quand on passe juste le chemin de la page. */
  path?: string
  ogImage?: string
  /** Ex: "noindex, nofollow" */
  robots?: string
  /** Raccourci pour noindex */
  noindex?: boolean
  /** "website" (défaut) ou "article" */
  type?: 'website' | 'article'
  /** fr_FR par défaut */
  locale?: string
}

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/$/, '')

function toAbsoluteUrl(url?: string): string | undefined {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) return url
  if (!SITE_URL) return url
  const clean = url.startsWith('/') ? url : `/${url}`
  return `${SITE_URL}${clean}`
}

export function Seo({
  title,
  description,
  canonical,
  path,
  ogImage,
  robots,
  noindex,
  type = 'website',
  locale = 'fr_FR',
}: SeoProps) {
  const canonicalUrl = toAbsoluteUrl(canonical ?? path)
  const ogImageUrl = toAbsoluteUrl(ogImage)
  const robotsContent = noindex ? 'noindex, nofollow' : robots

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {robotsContent && <meta name="robots" content={robotsContent} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content={ogImageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
    </Helmet>
  )
}
