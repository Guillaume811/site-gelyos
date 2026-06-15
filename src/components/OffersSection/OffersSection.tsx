import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CardPack from '@/components/CardPack/CardPack'
import CardPackDetails from '@/components/CardPackDetails/CardPackDetails'
import Heading from '@/components/Heading/Heading'
import type {
  DetailsPackContent,
  InlineContent,
  PacksContent,
} from '@/ressources/content/contentTypes'
import styles from './OffersSection.module.scss'

interface Props extends PacksContent {
  detailsPack: DetailsPackContent
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

/* Component OffersSection
 * Render logic:
 * - Receives the offers introduction and its list of pack cards.
 * - Selects the Essential pack by default and updates the active detail on demand.
 * - Keeps responsive details closed until the user selects a pack.
 * - Preserves the card order defined in the service content.
 *
 * View TSX:
 * - Renders left-aligned headings, separator, and description.
 * - Renders the desktop detail below all cards.
 * - Renders responsive details directly below the selected card.
 */
export default function OffersSection({
  subtitle,
  title,
  description,
  cardPackItem,
  detailsPack,
}: Props) {
  const [selectedPackIndex, setSelectedPackIndex] = useState(1)
  const [expandedPackIndex, setExpandedPackIndex] = useState<number | null>(null)
  const selectedPack = detailsPack[selectedPackIndex]

  const selectPack = (index: number) => {
    setSelectedPackIndex(index)
    setExpandedPackIndex(index)
  }

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <Heading level={3} className={styles.subtitle}>
          {subtitle}
        </Heading>
        <Heading level={2} className={styles.title}>
          {title}
        </Heading>
        <div className={styles.separator} aria-hidden="true" />
        <p className={styles.description}>{renderInlineContent(description)}</p>
      </div>

      <div className={styles.cards}>
        {cardPackItem.map((card, index) => (
          <div className={styles.cardSlot} key={card.title}>
            <CardPack
              {...card}
              isActive={index === selectedPackIndex}
              onSelect={() => selectPack(index)}
            />

            <div className={styles.responsiveDetails}>
              <AnimatePresence initial={false}>
                {expandedPackIndex === index && (
                  <motion.div
                    key={`responsive-detail-${index}`}
                    initial={{ opacity: 0, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <CardPackDetails {...detailsPack[index]} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.desktopDetails}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedPackIndex}
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <CardPackDetails {...selectedPack} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
