import { useMemo } from 'react'
import Link from 'next/link'
import Heading from '@/components/Heading/Heading'
import buttonStyles from '@/components/Buttons/Button.module.scss'
import styles from './ProjectPreview.module.scss'
import { projectPreviewContent } from '@/ressources/content/home/projectPreviewContent'
import CardCarouselNext from '@/components/Carousel/CardCarousel/CardCarouselNext'
import type { Project } from '@/ressources/content/portfolio/types'
import type { InlineContent } from '@/ressources/content/contentTypes'
import { usePortfolioData } from '@/ressources/content/portfolio/usePortfolioData'

function sortByLatest(a: Project, b: Project) {
  const ao = typeof a.order === 'number' ? a.order : Number.NEGATIVE_INFINITY
  const bo = typeof b.order === 'number' ? b.order : Number.NEGATIVE_INFINITY
  if (bo !== ao) return bo - ao

  const aid = String(a.id ?? '')
  const bid = String(b.id ?? '')
  if (aid !== bid) return aid.localeCompare(bid, 'fr')

  const aslug = String(a.slug ?? '')
  const bslug = String(b.slug ?? '')
  return aslug.localeCompare(bslug, 'fr')
}

function renderInlineContent(content: InlineContent) {
  return (
    <p>
      {content.map((segment, index) => {
        switch (segment.type) {
          case 'text':
            return <span key={`text-${index}`}>{segment.text}</span>
          case 'strong':
            return <strong key={`strong-${index}`}>{segment.text}</strong>
          case 'emphasis':
            return <em key={`emphasis-${index}`}>{segment.text}</em>
          case 'accent':
            return (
              <span key={`accent-${index}`} data-inline="accent">
                {segment.text}
              </span>
            )
          case 'link':
            return (
              <a key={`link-${index}`} href={segment.href}>
                {segment.text}
              </a>
            )
          case 'lineBreak':
            return <br key={`line-break-${index}`} />
          default:
            return null
        }
      })}
    </p>
  )
}

export default function ProjectPreview() {
  const { title, text, firstButton } = projectPreviewContent
  const { data, loading, error, reload } = usePortfolioData()

  const allProjects = useMemo<Project[]>(() => {
    if (!data) return []
    const merged: Project[] = [
      ...(data.vitrine ?? []),
      ...(data.ecommerce ?? []),
      ...(data.application ?? []),
      ...(data.freelance ?? []),
    ]
    return merged.slice().sort(sortByLatest)
  }, [data])

  return (
    <section className={styles.projectPreview} aria-label="Project preview">
      <div className={styles.container}>
        <div className={styles.left}>
          <Heading level={2} className={styles.title}>{title}</Heading>
          {renderInlineContent(text)}
        </div>
        <div className={styles.right}>
          <Link
            href={firstButton.to as string}
            className={`${buttonStyles.btn} ${buttonStyles.primary} ${styles.button}`}
          >
            {firstButton.label}
          </Link>
        </div>
      </div>

      {!!allProjects.length && (
        <div className={styles.carousel} data-pp-count={allProjects.length}>
          <CardCarouselNext projects={allProjects} ariaLabel="Derniers projets realises" />
        </div>
      )}

      {loading && !allProjects.length && (
        <div className={styles.carousel} data-pp-state="loading">
          Chargement des projets...
        </div>
      )}

      {error && !allProjects.length && (
        <div className={styles.carousel} data-pp-state="error" role="alert">
          <p>Impossible de charger les projets.</p>
          <button type="button" onClick={reload} className={styles.button}>
            Reessayer
          </button>
        </div>
      )}
    </section>
  )
}
