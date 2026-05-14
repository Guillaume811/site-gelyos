'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Heading from '~/components/Heading/Heading'
import styles from './CallToActionNext.module.scss'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import { ctaContent } from '~/ressources/content/ctaContent/ctaContent'
import { routes } from '~/ressources/routes'

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
        <div className={styles.text}>
          <ReactMarkdown remarkPlugins={[remarkBreaks]} components={{ p: ({ children }) => <p>{children}</p> }}>
            {text}
          </ReactMarkdown>
        </div>
        <div className={styles.actions}>
          <Link href="/contact" className={`${buttonStyles.btn} ${buttonStyles.primary}`}>
            {button}
          </Link>
        </div>
      </div>
    </section>
  )
}
