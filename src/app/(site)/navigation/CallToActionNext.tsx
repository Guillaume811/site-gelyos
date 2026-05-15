'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Heading from '~/components/Heading/Heading'
import styles from './CallToActionNext.module.scss'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import { ctaContent } from '~/ressources/content/ctaContent/ctaContent'
import type { InlineContent } from '~/ressources/content/contentTypes'
import { routes } from '~/ressources/routes'

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

export default function CallToActionNext() {
  const pathname = usePathname() ?? '/'
  const currentRoute = routes.find((route) => route.path === pathname)
  const content = currentRoute ? ctaContent[currentRoute.name] : undefined

  if (!content) return null

  const { title, text, button } = content

  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.line} aria-hidden="true" />
      <div className={styles.container}>
        <Heading id="cta-title" level={3} className={styles.title}>
          {title}
        </Heading>
        <div className={styles.text}>{renderInlineContent(text)}</div>
        <div className={styles.actions}>
          <Link href="/contact" className={`${buttonStyles.btn} ${buttonStyles.primary}`}>
            {button}
          </Link>
        </div>
      </div>
    </section>
  )
}
