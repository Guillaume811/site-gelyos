'use client'

import { useMemo } from 'react'
import GridProject from './ProjectGrid/ProjectGrid'
import HeaderSection from '~/components/HeaderSection/HeaderSection'
import PageIntro from '~/components/PageIntro/PageIntro'
import { portfolioContent } from '~/ressources/content/portfolio/portfolioContent'
import { usePortfolioData } from '~/ressources/content/portfolio/usePortfolioData'
import type { Project } from '~/ressources/content/portfolio/types'

/* Component Portfolio
 * Render logic:
 * - Reuses portfolio data and keeps the legacy sorting behavior by most recent order.
 * - Preserves loading/error states and project list rendering conditions.
 *
 * View TSX:
 * - Renders header, intro, then the project grid when data is available.
 * - Keeps textual fallback states identical to legacy behavior.
 */
export default function Portfolio() {
  const { data, loading, error, reload } = usePortfolioData()
  const { header, intro } = portfolioContent

  const allProjects = useMemo<Project[]>(() => {
    if (!data) return []

    const merged: Project[] = [
      ...(data.vitrine ?? []),
      ...(data.ecommerce ?? []),
      ...(data.application ?? []),
      ...(data.freelance ?? []),
    ]

    return merged.slice().sort((a, b) => {
      const ao = typeof a.order === 'number' ? a.order : Number.NEGATIVE_INFINITY
      const bo = typeof b.order === 'number' ? b.order : Number.NEGATIVE_INFINITY
      if (bo !== ao) return bo - ao

      const aid = String(a.id ?? '')
      const bid = String(b.id ?? '')
      if (aid !== bid) return aid.localeCompare(bid)

      const aslug = String(a.slug ?? '')
      const bslug = String(b.slug ?? '')
      return aslug.localeCompare(bslug)
    })
  }, [data])

  return (
    <div>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />

      {loading && <p>Chargement...</p>}
      {error && (
        <p role="alert">
          Une erreur est survenue.{' '}
          <button type="button" onClick={reload}>
            Réessayer
          </button>
        </p>
      )}

      {!!allProjects.length && <GridProject projects={allProjects} />}
    </div>
  )
}
