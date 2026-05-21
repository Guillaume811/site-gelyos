'use client'

import HeaderSection from '@/components/HeaderSection/HeaderSection'
import { openCookieBanner } from '@/components/CookieBanner/cookieBannerControls'
import { mentionContent } from '@/ressources/content/mention/mentionContent'
import SectionBlock from './SectionBlock/SectionBlock'
import styles from './MentionsLegales.module.scss'

/* Component MentionsLegales
 * Render logic:
 * - Composes the legal page from structured content entries.
 * - Preserves section anchors and cookie-preferences action.
 *
 * View TSX:
 * - Renders page header then legal sections in the legacy order.
 * - Uses a dedicated section component for repeated section markup.
 */
export default function MentionsLegales() {
  const {
    header,
    editeur,
    hebergement,
    conception,
    intellectuelle,
    responsabilite,
    cookies,
    confidentialite,
    loi,
  } = mentionContent

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <div className={styles.container}>
        <SectionBlock title={editeur.title} description={editeur.description} />
        <SectionBlock title={hebergement.title} description={hebergement.description} />
        <SectionBlock title={conception.title} description={conception.description} />
        <SectionBlock title={intellectuelle.title} description={intellectuelle.description} />
        <SectionBlock id="cookie" title={responsabilite.title} description={responsabilite.description} />
        <SectionBlock
          id="confidential"
          title={cookies.title}
          description={cookies.description}
          withCookieButton
          onOpenCookiePreferences={openCookieBanner}
        />
        <SectionBlock title={confidentialite.title} description={confidentialite.description} />
        <SectionBlock title={loi.title} description={loi.description} />
      </div>
    </>
  )
}

