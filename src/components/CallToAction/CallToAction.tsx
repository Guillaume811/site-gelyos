import Heading from '../Heading/Heading'
import styles from './CallToAction.module.scss'
import { PrimaryButtonLink } from '@/components/Buttons/ButtonLink'
import { ctaContent } from '@/ressources/content/ctaContent/ctaContent'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { useLocation } from 'react-router-dom'
import { routes } from '@/ressources/routes'

/* Component CallToAction
* Render logic :
* Uses "useLocation" to get the current pathname.
* Finds the exact matching route from "routes" and reads CTA content from "ctaContent".
* If no content exists for the current route, returns null (no CTA shown).
* Destructures { title, text, button } from the matched content.

* View TSX :
* Renders a <section> with an accessible title using aria-labelledby="cta-title".
* Shows a decorative line (aria-hidden) and a centered container.
* <Heading level={3}> renders the title; Markdown allows **bold** keywords.
* The main text is rendered with ReactMarkdown (with line breaks support via remarkBreaks).
* A primary button links to "/contact" using <PrimaryButtonLink>.
*/
export default function CallToAction() {

  const { pathname } = useLocation()

  const currentRoute = routes.find(route => route.path === pathname)
  const content = currentRoute ? ctaContent[currentRoute.name] : undefined

  if (!content) return null

  const { title, text, button } = content

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