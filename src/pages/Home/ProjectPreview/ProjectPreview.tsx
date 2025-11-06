import { useMemo } from 'react'
import Heading from '@/components/Heading/Heading'
import { PrimaryButtonLink } from '@/components/Buttons/ButtonLink'
import ReactMarkdown from 'react-markdown'
import styles from './ProjectPreview.module.scss'
import { projectPreviewContent } from '@/ressources/content/home/projectPreviewContent'
import CardCarousel from '@/components/Carousel/CardCarousel/CardCarousel'
import type { Project } from '@/ressources/content/portfolio/types'
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
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div className={styles.right}>
          <PrimaryButtonLink to={firstButton.to} className={styles.button}>
            {firstButton.label}
          </PrimaryButtonLink>
        </div>
      </div>

      {!!allProjects.length && (
        <div className={styles.carousel} data-pp-count={allProjects.length}>
          <CardCarousel projects={allProjects} ariaLabel="Derniers projets realises" />
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
