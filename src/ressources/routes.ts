// Source de vérité unique
export const routes = [
  { name: 'home', path: '/', label: 'Accueil' },
  { name: 'services', path: '/services', label: 'Services' },
  { name: 'aPropos', path: '/a-propos', label: 'À propos' },
  { name: 'portfolio', path: '/portfolio', label: 'Portfolio' },
  /* { name: 'blog', path: '/blog', label: 'Blog' }, */
  { name: 'contact', path: '/contact', label: 'Contact' },
  { name: 'mentionsLegales', path: '/mentions-legales',label: 'Mentions légales' }
] as const

// One element type from the `routes` array (union of all items)
export type RouteItem = typeof routes[number]
// Union of all possible `name` values from RouteItem
export type RouteName = RouteItem['name']
// Union of all possible `path` values from RouteItem
export type RoutePath = RouteItem['path']

// Turn the routes array into an object so we can get a route directly by its name without looping (access O(1))
const routesMap: Record<RouteName, RouteItem> = routes.reduce((acc, r) => {
  acc[r.name] = r
  return acc
}, {} as Record<RouteName, RouteItem>)

// --- Helpers principaux ---

// Get the route by its name; throw an error if it does not exist
export function getRoute<N extends RouteName>(name: N): Extract<RouteItem, { name: N }> {
  const r = routesMap[name]
  if (!r) throw new Error(`Route "${name}" introuvable`)
  return r as Extract<RouteItem, { name: N }>
}

// Get only the path string of a route by its name
export function getPath(name: RouteName): RoutePath {
  return getRoute(name).path
}

// Get all routes except some names (keeps original order for menus)
export function getAllExcept(...excluded: RouteName[]): RouteItem[] {
  return routes.filter(r => !excluded.includes(r.name))
}

// Get all routes except the "mentionsLegales" route
export function getAllExceptMentions(): RouteItem[] {
  return getAllExcept('mentionsLegales')
}

// Get all routes except home, mentionsLegales and contact (for main navigation menu)
export function getMainNavRoutes(): RouteItem[] {
  return getAllExcept('home', 'mentionsLegales', 'contact')
}

// --- Utils optionnels ---

// Check if a string is a known route path (narrows type to RoutePath)
export function isRoutePath(value: string): value is RoutePath {
  return routes.some(r => r.path === value)
}