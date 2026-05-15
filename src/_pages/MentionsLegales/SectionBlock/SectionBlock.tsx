'use client'

import Heading from '~/components/Heading/Heading'
import type { InlineContent } from '~/ressources/content/contentTypes'
import styles from './SectionBlock.module.scss'

type SectionBlockProps = {
  id?: string
  title: string
  description: InlineContent
  withCookieButton?: boolean
  onOpenCookiePreferences?: () => void
}

/* Component SectionBlock
 * Render logic:
 * - Renders one legal section from inline-typed content.
 * - Optionally renders the cookie preferences action button.
 *
 * View TSX:
 * - Uses semantic heading and inline content paragraphs.
 * - Keeps the same visual structure as the legacy page.
 */
function splitIntoParagraphs(content: InlineContent): InlineContent[] {
  const paragraphs: InlineContent[] = []
  let current: InlineContent = []
  let pendingLineBreaks = 0

  for (const segment of content) {
    if (segment.type === 'lineBreak') {
      pendingLineBreaks += 1
      continue
    }

    if (pendingLineBreaks > 1) {
      if (current.length > 0) paragraphs.push(current)
      current = []
    } else if (pendingLineBreaks === 1) {
      current.push({ type: 'lineBreak' })
    }

    pendingLineBreaks = 0
    current.push(segment)
  }

  if (current.length > 0) paragraphs.push(current)
  return paragraphs
}

function renderInlineContent(content: InlineContent) {
  return splitIntoParagraphs(content).map((paragraph, paragraphIndex) => (
    <p key={`paragraph-${paragraphIndex}`}>
      {paragraph.map((segment, segmentIndex) => {
        switch (segment.type) {
          case 'text':
            return <span key={`text-${paragraphIndex}-${segmentIndex}`}>{segment.text}</span>
          case 'strong':
            return <strong key={`strong-${paragraphIndex}-${segmentIndex}`}>{segment.text}</strong>
          case 'emphasis':
            return <em key={`emphasis-${paragraphIndex}-${segmentIndex}`}>{segment.text}</em>
          case 'accent':
            return (
              <span key={`accent-${paragraphIndex}-${segmentIndex}`} data-inline="accent">
                {segment.text}
              </span>
            )
          case 'link':
            return (
              <a key={`link-${paragraphIndex}-${segmentIndex}`} href={segment.href}>
                {segment.text}
              </a>
            )
          case 'lineBreak':
            return <br key={`line-break-${paragraphIndex}-${segmentIndex}`} />
          default:
            return null
        }
      })}
    </p>
  ))
}

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
        {renderInlineContent(description)}
        {withCookieButton && (
          <button type="button" className={styles.cookieButton} onClick={onOpenCookiePreferences}>
            Modifier mes préférences cookies
          </button>
        )}
      </div>
    </div>
  )
}
