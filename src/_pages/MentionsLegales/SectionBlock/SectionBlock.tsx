'use client'

import Heading from '~/components/Heading/Heading'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import styles from './SectionBlock.module.scss'

type SectionBlockProps = {
  id?: string
  title: string
  description: string
  withCookieButton?: boolean
  onOpenCookiePreferences?: () => void
}

/* Component SectionBlock
 * Render logic:
 * - Renders one legal section with markdown content.
 * - Optionally renders the cookie preferences action button.
 *
 * View TSX:
 * - Uses semantic heading and markdown text container.
 * - Keeps the same visual structure as the legacy page.
 */
export default function SectionBlock({
  id,
  title,
  description,
  withCookieButton = false,
  onOpenCookiePreferences,
}: SectionBlockProps) {
  return (
    <div id={id} className={styles.paragraphe}>
      <Heading level={2}>{title}</Heading>
      <div className={styles.text}>
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{description}</ReactMarkdown>
        {withCookieButton && (
          <button type="button" className={styles.cookieButton} onClick={onOpenCookiePreferences}>
            Modifier mes préférences cookies
          </button>
        )}
      </div>
    </div>
  )
}

