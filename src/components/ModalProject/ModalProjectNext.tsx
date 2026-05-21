'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Project, ProjectCarouselImage } from '@/ressources/content/portfolio/types'
import Accordion from '@/components/Accordion/Accordion'
import Heading from '@/components/Heading/Heading'
import PictureCarousel from '@/components/Carousel/PictureCarousel/PictureCarousel'
import type { PictureItem } from '@/components/Carousel/PictureCarousel/PictureCarousel'
import buttonStyles from '@/components/Buttons/Button.module.scss'
import styles from './ModalProject.module.scss'

type ModalProjectProps = {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const DEBUG_CAROUSEL = false

export default function ModalProjectNext({ project, isOpen, onClose }: ModalProjectProps) {
  if (!project) return null

  const firstImage = project.carousel?.[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className={styles.content}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Fermer la modale"
              >
                <X aria-hidden="true" />
              </button>

              <div className={styles.left}>
                {(() => {
                  const source: ProjectCarouselImage[] = project.carousel ?? []
                  const hasFallback = Boolean(firstImage)

                  const items: PictureItem[] = source.map((item) => ({
                    src: item.src,
                    alt: item.alt ?? project.title,
                    title: item.title,
                  }))

                  if (!items.length && hasFallback && firstImage) {
                    items.push({
                      src: firstImage.src,
                      alt: firstImage.alt,
                      title: firstImage.title,
                    })
                  }

                  if (DEBUG_CAROUSEL) {
                    // Keep same debug switch behavior as legacy modal.
                  }

                  return items.length ? <PictureCarousel items={items} /> : null
                })()}
              </div>

              <div className={styles.right}>
                <div className={styles.scrollArea} role="region" aria-label="DÃ©tails du projet">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`Logo du client ${project.client ?? ''}`}
                      className={styles.logo}
                    />
                  )}

                  {project.client && (
                    <Heading level={4} className={styles.client}>
                      {project.client}
                    </Heading>
                  )}

                  <Heading level={2} id={`modal-title-${project.id}`} className={styles.title}>
                    {project.title}
                  </Heading>

                  <p className={styles.description}>{project.description}</p>

                  {project.accordionItems && project.accordionItems.length > 0 && (
                    <Accordion items={project.accordionItems} />
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      className={`${buttonStyles.btn} ${buttonStyles.primary} ${styles.button}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

