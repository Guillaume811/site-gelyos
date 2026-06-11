'use client'

import HeaderSection from '@/components/HeaderSection/HeaderSection'
import PageIntro from '@/components/PageIntro/PageIntro'
import { serviceDetailsContent } from '@/ressources/content/services/details'
import type { ServiceRouteItem } from '@/ressources/routes'
import styles from './ServiceDetail.module.scss'

interface Props {
  serviceSlug: ServiceRouteItem['slug']
}

/* Component ServiceDetail
 * Render logic:
 * - Receives the validated slug from the dynamic service route.
 * - Selects the matching header and intro content.
 * - Reuses one shared layout for every service detail page.
 *
 * View TSX:
 * - Renders the shared page header and introduction.
 * - Keeps the remaining service sections available for later integration.
 */
export default function ServiceDetail({ serviceSlug }: Props) {
  const { header, intro } = serviceDetailsContent[serviceSlug]

  return (
    <div className={styles.page}>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />
    </div>
  )
}
