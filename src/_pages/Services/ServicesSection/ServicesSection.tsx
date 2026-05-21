/* Component ServicesSection
 * Render logic:
 * - Displays one service block with inline-typed text, accordion details and image.
 * - Supports left/right alternation using the reverse prop from parent page.
 *
 * View TSX:
 * - Uses shared TwoColumnSection to preserve existing responsive structure.
 * - Keeps semantic heading and lazy-loaded image for each service section.
 */
import Accordion from '@/components/Accordion/Accordion'
import Heading from '@/components/Heading/Heading'
import TwoColumnSection from '@/components/TwoColumnSection/TwoColumnSection'
import { getAssetSrc } from '@/lib/getAssetSrc'
import type { InlineContent, ServiceSectionContent } from '@/ressources/content/contentTypes'
import styles from './ServicesSection.module.scss'

interface Props extends ServiceSectionContent {
  reverse?: boolean
  className?: string
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

export default function ServicesSection({
  title,
  text,
  image,
  ServiceAccordionItems,
  reverse = false,
  className,
}: Props) {
  return (
    <TwoColumnSection
      reverse={reverse}
      className={className}
      left={
        <div className={styles.left}>
          <Heading level={2}>{title}</Heading>
          <div className={styles.text}>{renderInlineContent(text)}</div>
          <Accordion items={ServiceAccordionItems} />
        </div>
      }
      right={
        <div className={styles.right}>
          <img src={getAssetSrc(image.src)} alt={image.alt} className={styles.image} loading="lazy" />
        </div>
      }
    />
  )
}
