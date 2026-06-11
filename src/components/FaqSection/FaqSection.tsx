import Accordion from '@/components/Accordion/Accordion'
import Heading from '@/components/Heading/Heading'
import type { FaqContent } from '@/ressources/content/contentTypes'
import styles from './FaqSection.module.scss'

/* Component FaqSection
 * Render logic:
 * - Receives the FAQ title and its accordion items.
 * - Delegates item rendering and interactions to the shared Accordion component.
 *
 * View TSX:
 * - Renders a semantic level-two heading aligned to the left.
 * - Renders the accordion list inside a centered container.
 */
export default function FaqSection({ title, faqItems }: FaqContent) {
  return (
    <section className={styles.section}>
      <Heading level={2} className={styles.title}>
        {title}
      </Heading>

      <div className={styles.accordion}>
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
