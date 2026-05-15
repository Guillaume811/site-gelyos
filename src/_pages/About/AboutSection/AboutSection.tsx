import Heading from '~/components/Heading/Heading'
import TwoColumnSection from '~/components/TwoColumnSection/TwoColumnSection'
import { getAssetSrc } from '~/lib/getAssetSrc'
import type { AboutSectionContent, InlineContent } from '~/ressources/content/contentTypes'
import styles from './AboutSection.module.scss'

interface Props extends AboutSectionContent {
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

/* Component AboutSection
 * Render logic:
 * - Displays one about section with markdown text and an illustration.
 * - Supports alternating column order through the reverse prop.
 *
 * View TSX:
 * - Uses shared TwoColumnSection to preserve responsive behavior.
 * - Renders a semantic level-2 heading, markdown paragraph(s), and lazy image.
 */
export default function AboutSection({
  title,
  description,
  image,
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
          <div className={styles.text}>{renderInlineContent(description)}</div>
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
