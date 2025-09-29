import Heading from '../Heading/Heading'
import styles from './CallToAction.module.scss'
import { PrimaryButtonLink } from '@/components/Buttons/ButtonLink'
import { ctaContent } from '@/ressources/textes/ctaContent'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export default function CallToAction() {

  const { title, text, button } = ctaContent.home

  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.line} aria-hidden="true" />
      <div className={styles.container}>
        <Heading id="cta-title" level={3} className={styles.title}>
          <ReactMarkdown>{title}</ReactMarkdown>
        </Heading>
        <p className={styles.text}>
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>{text}</ReactMarkdown>
        </p>
        <div className={styles.actions}>
          <PrimaryButtonLink to="/contact">
            {button}
          </PrimaryButtonLink>
        </div>
      </div>
    </section>
  )
}