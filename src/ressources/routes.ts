// Source de vérité unique
export const routes = [
  { name: 'home', path: '/', label: 'Accueil' },
  { name: 'services', path: '/services', label: 'Services' },
  { name: 'aPropos', path: '/a-propos', label: 'À propos' },
  { name: 'portfolio', path: '/portfolio', label: 'Portfolio' },
  { name: 'blog', path: '/blog', label: 'Blog' },
  { name: 'contact', path: '/contact', label: 'Contact' },
  { name: 'mentionsLegales', path: '/mentions-legales',label: 'Mentions légales' }
] as const

// Types dérivés (aucune duplication)
export type RouteItem = typeof routes[number]
export type RouteName = RouteItem['name']
export type RoutePath = RouteItem['path']

// Index (accès O(1))
const routesMap: Record<RouteName, RouteItem> = routes.reduce((acc, r) => {
  acc[r.name] = r
  return acc
}, {} as Record<RouteName, RouteItem>)

// --- Helpers principaux ---

/** Retourne la route par son name (ou throw si introuvable) */
export function getRoute<N extends RouteName>(name: N): Extract<RouteItem, { name: N }> {
  const r = routesMap[name]
  if (!r) throw new Error(`Route "${name}" introuvable`)
  return r as Extract<RouteItem, { name: N }>
}

/** Retourne le path d'une route (typé RoutePath) */
export function getPath(name: RouteName): RoutePath {
  return getRoute(name).path
}

/** Toutes les routes sauf celles exclues */
export function getAllExcept(...excluded: RouteName[]): RouteItem[] {
  return routes.filter(r => !excluded.includes(r.name))
}

/** Toutes sauf mentions légales */
export function getAllExceptMentions(): RouteItem[] {
  return getAllExcept('mentionsLegales')
}

/** Toutes sauf home, mentions légales et contact (pour la nav principale) */
export function getMainNavRoutes(): RouteItem[] {
  return getAllExcept('home', 'mentionsLegales', 'contact')
}

// --- Utils optionnels ---

/** Type guard: vérifie si une string est un RoutePath connu */
export function isRoutePath(value: string): value is RoutePath {
  return routes.some(r => r.path === value)
}