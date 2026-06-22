'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getMainNavRoutes, serviceRouteList } from '@/ressources/routes'
import styles from './MainNavNext.module.scss'

type Props = {
  className?: string
}

/* Component MainNavNext
 * Render logic:
 * - Uses Next pathname to resolve active route state.
 * - Keeps the animated background pill behavior from the legacy nav.
 * - Reuses existing route registry and existing SCSS module.
 *
 * View TSX:
 * - Renders a nav list with Next Link elements.
 * - Renders the five service links in a dropdown under Services.
 * - Closes the services dropdown after a service link click.
 * - Applies active class and aria-current on the current route.
 */
export default function MainNavNext({ className }: Props) {
  const navRoutes = useMemo(() => getMainNavRoutes(), [])
  const pathname = usePathname() ?? '/'
  const [isServicesSubmenuClosed, setIsServicesSubmenuClosed] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const activeRoute = navRoutes.find((route) => pathname.startsWith(route.path))

    if (activeRoute && linkRefs.current[activeRoute.path]) {
      const el = linkRefs.current[activeRoute.path]
      if (!el) return
      const rect = el.getBoundingClientRect()
      const ul = el.closest('ul')
      const parentRect = ul ? ul.getBoundingClientRect() : rect
      setIndicatorStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      })
      return
    }

    setIndicatorStyle({ left: 0, width: 0 })
  }, [pathname, navRoutes])

  return (
    <nav className={clsx(styles.navRoot, className)} aria-label="Navigation principale">
      <ul className={styles.list}>
        <motion.div
          className={styles.activeBg}
          animate={indicatorStyle}
          initial={false}
          style={{ opacity: indicatorStyle.width === 0 ? 0 : 1 }}
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        />

        {navRoutes.map((route) => {
          const isActive = pathname.startsWith(route.path)
          const hasServiceMenu = route.name === 'services'

          return (
            <li
              key={route.name}
              className={clsx(
                styles.link,
                hasServiceMenu && styles.hasSubmenu,
                hasServiceMenu && isServicesSubmenuClosed && styles.submenuDismissed,
              )}
              onMouseEnter={() => {
                if (hasServiceMenu) setIsServicesSubmenuClosed(false)
              }}
              onFocus={() => {
                if (hasServiceMenu) setIsServicesSubmenuClosed(false)
              }}
            >
              <Link
                href={route.path}
                ref={(el) => {
                  linkRefs.current[route.path] = el
                }}
                className={isActive ? styles.active : undefined}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{route.label}</span>
                {hasServiceMenu && (
                  <ChevronDown className={styles.arrow} size={18} aria-hidden="true" />
                )}
              </Link>

              {hasServiceMenu && (
                <ul className={styles.submenu} aria-label="Services">
                  {serviceRouteList.map((service) => {
                    const isServiceActive = pathname === service.path

                    return (
                      <li key={service.slug}>
                        <Link
                          href={service.path}
                          aria-current={isServiceActive ? 'page' : undefined}
                          className={isServiceActive ? styles.submenuActive : undefined}
                          onClick={() => setIsServicesSubmenuClosed(true)}
                        >
                          {service.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
