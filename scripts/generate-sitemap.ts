import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'
import { routes, type RouteItem } from '../src/ressources/routes'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const envFiles = ['.env.local', '.env.production', '.env']
for (const file of envFiles) {
  const envPath = path.resolve(projectRoot, file)
  if (existsSync(envPath)) {
    config({ path: envPath, override: false })
  }
}

const SITE_URL = (process.env.VITE_SITE_URL ?? '').replace(/\/$/, '')

if (!SITE_URL) {
  throw new Error('VITE_SITE_URL doit être défini pour générer le sitemap.')
}

const EXCLUDED_ROUTES: RouteItem['name'][] = ['mentionsLegales']

function normalizePath(p: string) {
  if (!p || p === '/') return '/'
  return `/${p.replace(/^\/+/, '')}`
}

function toAbsoluteUrl(p: string) {
  const normalized = normalizePath(p)
  if (normalized === '/') return SITE_URL
  return `${SITE_URL}${normalized}`
}

function getPriority(route: RouteItem): string {
  if (route.name === 'home') return '1.0'
  if (route.name === 'services' || route.name === 'portfolio') return '0.9'
  return '0.8'
}

const today = new Date().toISOString().split('T')[0]

const urls = routes
  .filter(route => !EXCLUDED_ROUTES.includes(route.name))
  .map(route => {
    const loc = toAbsoluteUrl(route.path)
    const priority = getPriority(route)
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

const outputPath = path.resolve(__dirname, '../public/sitemap.xml')

await writeFile(outputPath, xml, 'utf8')
console.log(`Sitemap généré avec ${routes.length} routes (dont ${EXCLUDED_ROUTES.length} exclues) -> ${outputPath}`)
