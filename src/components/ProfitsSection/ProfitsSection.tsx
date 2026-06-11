import Heading from '@/components/Heading/Heading'
import type { ProfitContent } from '@/ressources/content/contentTypes'
import styles from './ProfitsSection.module.scss'

/* Component ProfitsSection
 * Render logic:
 * - Receives one title and a list of service benefits.
 * - Keeps the benefit order defined in the content file.
 *
 * View TSX:
 * - Renders a semantic level-two heading.
 * - Renders each benefit in a paragraph inside a responsive grid.
 */
export default function ProfitsSection({ title, listProfit }: ProfitContent) {
  return (
    <section className={styles.section}>
      <Heading level={2}>{title}</Heading>

      <div className={styles.grid}>
        {listProfit.map((profit, index) => (
          <p key={`${index}-${profit}`}>{profit}</p>
        ))}
      </div>
    </section>
  )
}
