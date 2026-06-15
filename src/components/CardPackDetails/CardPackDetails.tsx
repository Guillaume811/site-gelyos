import Link from 'next/link'
import Heading from '@/components/Heading/Heading'
import buttonStyles from '@/components/Buttons/Button.module.scss'
import { getAssetSrc } from '@/lib/getAssetSrc'
import type { DetailsPackItemContent, InlineContent } from '@/ressources/content/contentTypes'
import styles from './CardPackDetails.module.scss'

function renderInlineContent(content: InlineContent) {
  return content.map((segment, index) => {
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
  })
}

/* Component CardPackDetails
 * Render logic:
 * - Receives the detail content of the currently selected offer.
 * - Preserves rich text emphasis and the configured button destination.
 *
 * View TSX:
 * - Renders the pack identity, included items, suggestions, and primary action.
 * - Splits detail content into a wider left column and a narrower right column.
 */
export default function CardPackDetails({
  icon,
  title,
  subtitle,
  itemPackContent,
  suggestionPackContent,
  firstButton,
}: DetailsPackItemContent) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerIcon} aria-hidden={icon.alt ? undefined : 'true'}>
          <img src={getAssetSrc(icon.src)} alt={icon.alt} />
        </div>
        <Heading level={3} className={styles.title}>
          {title}
        </Heading>
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <Heading level={4} className={styles.subtitle}>
            {subtitle}
          </Heading>

          <div className={styles.items}>
            {itemPackContent.map((item, index) => (
              <div className={styles.item} key={`${title}-${index}`}>
                <div className={styles.itemIcon} aria-hidden={item.icon.alt ? undefined : 'true'}>
                  <img src={getAssetSrc(item.icon.src)} alt={item.icon.alt} />
                </div>
                <p>{renderInlineContent(item.text)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.suggestions}>
            {suggestionPackContent.map((suggestion, index) => (
              <div className={styles.suggestion} key={`${suggestion.subtitle}-${index}`}>
                <div
                  className={styles.suggestionIcon}
                  aria-hidden={suggestion.icon.alt ? undefined : 'true'}
                >
                  <img src={getAssetSrc(suggestion.icon.src)} alt={suggestion.icon.alt} />
                </div>

                <div>
                  <Heading level={4} className={styles.suggestionTitle}>
                    {suggestion.subtitle}
                  </Heading>
                  <p>{suggestion.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={firstButton.to}
            className={`${buttonStyles.btn} ${buttonStyles.primary} ${styles.button}`}
          >
            {firstButton.label}
          </Link>
        </div>
      </div>
    </article>
  )
}
