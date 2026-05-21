'use client'

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { usePathname, useRouter } from 'next/navigation'
import type { Project } from '@/ressources/content/portfolio/types'
import { usePortfolioData } from '@/ressources/content/portfolio/usePortfolioData'
import { ModalProjectContext } from './ModalProjectContext'
import ModalProjectNext from '../ModalProjectNext'

type Props = { children: ReactNode }

function readProjectSlugFromLocation(): string | null {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get('project')
}

export function ModalProjectProviderNext({ children }: Props) {
  const router = useRouter()
  const pathname = usePathname() ?? '/'
  const { data } = usePortfolioData()

  const allProjects: Project[] = useMemo(() => {
    if (!data) return []
    return [
      ...(data.vitrine ?? []),
      ...(data.ecommerce ?? []),
      ...(data.application ?? []),
      ...(data.freelance ?? []),
    ]
  }, [data])

  const registry = useMemo(() => {
    const map = new Map<string, Project>()
    for (const project of allProjects) map.set(project.slug, project)
    return map
  }, [allProjects])

  const [slug, setSlug] = useState<string | null>(null)
  const project = slug ? registry.get(slug) ?? null : null
  const isOpen = !!project

  const open = useCallback(
    (nextSlug: string) => {
      if (typeof window === 'undefined') return
      const next = new URLSearchParams(window.location.search)
      next.set('project', nextSlug)
      const query = next.toString()
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
      setSlug(nextSlug)
    },
    [pathname, router],
  )

  const close = useCallback(() => {
    if (typeof window === 'undefined') return
    const next = new URLSearchParams(window.location.search)
    next.delete('project')
    const query = next.toString()
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
    setSlug(null)
  }, [pathname, router])

  useEffect(() => {
    setSlug(readProjectSlugFromLocation())

    const handlePopState = () => {
      setSlug(readProjectSlugFromLocation())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [pathname])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    lastFocusRef.current = document.activeElement as HTMLElement | null

    const focusablesSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return

      const container = containerRef.current
      if (!container) return
      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(focusablesSelector),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement)

      if (!focusables.length) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !container.contains(active)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    setTimeout(() => {
      const firstFocusable = containerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      firstFocusable?.focus()
    }, 0)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusRef.current?.focus?.()
    }
  }, [close, isOpen])

  return (
    <ModalProjectContext.Provider value={{ open, close, isOpen, slug, project }}>
      {children}
      {isOpen &&
        createPortal(
          <div ref={containerRef}>
            <ModalProjectNext project={project} isOpen={isOpen} onClose={close} />
          </div>,
          document.body,
        )}
    </ModalProjectContext.Provider>
  )
}
