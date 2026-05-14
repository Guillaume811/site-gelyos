import ReactMarkdown from 'react-markdown'
import Heading from '~/components/Heading/Heading'
import TwoColumnSection from '~/components/TwoColumnSection/TwoColumnSection'
import { getAssetSrc } from '~/lib/getAssetSrc'
import type { AboutSectionContent } from '~/ressources/content/contentTypes'
import styles from './AboutSection.module.scss'

interface Props extends AboutSectionContent {
  reverse?: boolean
  className?: string
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
          <div className={styles.text}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
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
