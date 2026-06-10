/* Component ServicesSection
 * Render logic:
 * - Displays one service offer with structured objective, audience and pricing content.
 * - Supports left/right alternation using the reverse prop from parent page.
 *
 * View TSX:
 * - Uses shared TwoColumnSection to preserve existing responsive structure.
 * - Keeps semantic text, accessible action link and lazy-loaded service image.
 */
import Link from 'next/link'
import buttonStyles from '@/components/Buttons/Button.module.scss'
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
  icon,
  title,
  textObjectif,
  textForWhom,
  price,
  secondButton,
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
          <div className={styles.header}>
            {icon && (
              <div className={styles.icon} aria-hidden="true">
                <img src={getAssetSrc(icon.src)} alt="" />
              </div>
            )}

            <Heading level={2} className={styles.title}>
              {title}
            </Heading>
          </div>

          <div className={styles.objectif}>
            {textObjectif.map((content, index) => (
              <div key={`objectif-${index}`} className={styles.textGroup}>
                <p className={styles.label}>{content.subtitle}</p>
                <div className={styles.description}>{renderInlineContent(content.description)}</div>
              </div>
            ))}
          </div>

          <div className={styles.forWhom}>
            {textForWhom.map((content, index) => (
              <div key={`for-whom-${index}`} className={styles.textGroup}>
                <p className={styles.label}>{content.subtitle}</p>
                <div className={styles.description}>{renderInlineContent(content.description)}</div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            {price && <div className={styles.price}>{renderInlineContent(price)}</div>}

            <Link
              href={secondButton.to as string}
              className={`${buttonStyles.btn} ${buttonStyles.secondary} ${styles.button}`}
            >
              {secondButton.label}
            </Link>
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
