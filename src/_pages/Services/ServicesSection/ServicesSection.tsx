/* Component ServicesSection
 * Render logic:
 * - Displays one service block with markdown text, accordion details and image.
 * - Supports left/right alternation using the reverse prop from parent page.
 *
 * View TSX:
 * - Uses shared TwoColumnSection to preserve existing responsive structure.
 * - Keeps semantic heading and lazy-loaded image for each service section.
 */
import ReactMarkdown from 'react-markdown'
import Accordion from '~/components/Accordion/Accordion'
import Heading from '~/components/Heading/Heading'
import TwoColumnSection from '~/components/TwoColumnSection/TwoColumnSection'
import { getAssetSrc } from '~/lib/getAssetSrc'
import type { ServiceSectionContent } from '~/ressources/content/contentTypes'
import styles from './ServicesSection.module.scss'

interface Props extends ServiceSectionContent {
  reverse?: boolean
  className?: string
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
          <div className={styles.text}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
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
