import Heading from '@/components/Heading/Heading'
import { SecondaryButton } from '@/components/Buttons/Button'
import { getAssetSrc } from '@/lib/getAssetSrc'
import type { CardPackItem, InlineContent } from '@/ressources/content/contentTypes'
import styles from './CardPack.module.scss'

interface Props extends CardPackItem {
  isActive: boolean
  onSelect: () => void
}

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

/* Component CardPack
 * Render logic:
 * - Receives one service offer and preserves its structured content.
 * - Renders rich text segments without changing their values.
 *
 * View TSX:
 * - Renders the offer header, price, included items, action button, and text link.
 * - Highlights the selected offer and exposes its detail selection action.
 * - Keeps icons decorative when their alternative text is empty.
 */
export default function CardPack({
  icon,
  title,
  description,
  price,
  itemPackContent,
  secondButton,
  text,
  isActive,
  onSelect,
}: Props) {
  return (
    <article className={`${styles.card} ${isActive ? styles.active : ''}`}>
      <div className={styles.header}>
        <div className={styles.icon} aria-hidden={icon.alt ? undefined : 'true'}>
          <img src={getAssetSrc(icon.src)} alt={icon.alt} />
        </div>

        <div className={styles.headerContent}>
          <Heading level={3} className={styles.title}>
            {title}
          </Heading>
          <p className={styles.description}>{renderInlineContent(description)}</p>
        </div>
      </div>

      <p className={styles.price}>{renderInlineContent(price)}</p>

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

      <div className={styles.actions}>
        <SecondaryButton
          onClick={onSelect}
          aria-pressed={isActive}
          aria-label={`${secondButton.label} - ${title}`}
        >
          {secondButton.label}
        </SecondaryButton>

        <p className={styles.text}>{renderInlineContent(text)}</p>
      </div>
    </article>
  )
}
