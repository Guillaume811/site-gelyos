'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getMainNavRoutes } from '@/ressources/routes'
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
 * - Applies active class and aria-current on the current route.
 */
export default function MainNavNext({ className }: Props) {
  const navRoutes = useMemo(() => getMainNavRoutes(), [])
  const pathname = usePathname() ?? '/'
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

          return (
            <li key={route.name} className={styles.link}>
              <Link
                href={route.path}
                ref={(el) => {
                  linkRefs.current[route.path] = el
                }}
                className={isActive ? styles.active : undefined}
                aria-current={isActive ? 'page' : undefined}
              >
                {route.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
