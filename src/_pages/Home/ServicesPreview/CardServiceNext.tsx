'use client'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Heading from '~/components/Heading/Heading'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import cardStyles from '~/components/CardService/CardService.module.scss'
import { getAssetSrc } from '~/lib/getAssetSrc'
import type { ServiceCard } from '~/ressources/content/contentTypes'

interface Props {
  data: ServiceCard
  className?: string
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

      <div className={cardStyles.text}>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

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
