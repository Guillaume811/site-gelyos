'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import type { Project } from '~/ressources/content/portfolio/types'
import CardProjectHomeNext from '~/components/CardProject/home/CardProjectHomeNext'
import styles from './CardCarousel.module.scss'
import '../../../styles/swiper.css'

type Props = {
  projects: Project[]
  className?: string
  ariaLabel?: string
  loop?: boolean
}

export default function CardCarouselNext({
  projects,
  className,
  ariaLabel = 'Carrousel de projets',
  loop = true,
}: Props) {
  if (!projects?.length) return null

  const containerClass = className ? `${styles.carousel} ${className}` : styles.carousel
  const shouldLoop = loop && projects.length > 1

  return (
    <div className={containerClass}>
      <Swiper
        modules={[Pagination, A11y]}
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        loop={shouldLoop}
        observer
        observeParents
        watchOverflow
        autoHeight
        a11y={{ enabled: true }}
        aria-label={ariaLabel}
      >
        {projects.map((project) => (
          <SwiperSlide key={`${project.category}-${project.id}`} className={styles.slide}>
            <div className={styles.card}>
              <CardProjectHomeNext project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

