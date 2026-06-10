'use client'

import Link from 'next/link'
import Heading from '@/components/Heading/Heading'
import buttonStyles from '@/components/Buttons/Button.module.scss'
import cardStyles from '@/components/CardService/CardService.module.scss'
import { getAssetSrc } from '@/lib/getAssetSrc'
import type { InlineContent, ServiceCard } from '@/ressources/content/contentTypes'

interface Props {
  data: ServiceCard
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

/* Component CardServiceNext
 * Render logic:
 * - Displays the existing service content without changing its values.
 * - Keeps optional subtitle and price blocks compatible with older card data.
 *
 * View TSX:
 * - Groups headings and icon in the card header.
 * - Groups price and service link in the card footer.
 */
export default function CardServiceNext({ data, className }: Props) {
  const { icon, subtitle, title, description, price, secondButton } = data

  return (
    <div className={`${cardStyles.card} ${className ?? ''}`}>
      <div className={cardStyles.header}>
        <div className={cardStyles.titles}>
          {subtitle && (
            <Heading level={4} className={cardStyles.subtitle}>
              {subtitle}
            </Heading>
          )}

          <Heading level={3} className={cardStyles.title}>
            {title}
          </Heading>
        </div>

        {icon && (
          <div className={cardStyles.icon} aria-hidden="true">
            <img src={getAssetSrc(icon.src)} alt={icon.alt} />
          </div>
        )}
      </div>

      <div className={cardStyles.text}>{renderInlineContent(description)}</div>

      <div className={cardStyles.footer}>
        {price && <div className={cardStyles.price}>{renderInlineContent(price)}</div>}

        <Link
          href={secondButton.to as string}
          aria-label={`${secondButton.label} — ${title}`}
          className={`${buttonStyles.btn} ${buttonStyles.secondary} ${cardStyles.button}`}
        >
          {secondButton.label}
        </Link>
      </div>
    </div>
  )
}
