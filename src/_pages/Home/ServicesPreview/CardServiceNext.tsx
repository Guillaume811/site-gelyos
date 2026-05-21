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

export default function CardServiceNext({ data, className }: Props) {
  const { icon, title, description, secondButton } = data

  return (
    <div className={`${cardStyles.card} ${className ?? ''}`}>
      {icon && (
        <div className={cardStyles.icon} aria-hidden="true">
          <img src={getAssetSrc(icon.src)} alt={icon.alt} />
        </div>
      )}

      <Heading level={3} className={cardStyles.title}>
        {title}
      </Heading>

      <div className={cardStyles.text}>{renderInlineContent(description)}</div>

      <Link
        href={secondButton.to as string}
        aria-label={`${secondButton.label} — ${title}`}
        className={`${buttonStyles.btn} ${buttonStyles.secondary} ${cardStyles.button}`}
      >
        {secondButton.label}
      </Link>
    </div>
  )
}
