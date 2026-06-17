'use client'

import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from '@/components/Heading/Heading'
import { getAssetSrc } from '@/lib/getAssetSrc'
import { logoClientsContent } from '@/ressources/content/home/logoClients'
import styles from './LogoClients.module.scss'
import '../../../styles/swiper.css'

/* Component LogoClients
 * Render logic:
 * - Reads logo content from the home content file.
 * - Runs an autoplay carousel with no arrows and no dots.
 *
 * View TSX:
 * - Renders a centered level 2 Heading.
 * - Shows three logos on tablet/desktop and two logos on mobile.
 */
export default function LogoClients() {
  const { title, itemClient } = logoClientsContent
  const shouldLoop = itemClient.length > 3

  if (!itemClient.length) return null

  return (
    <section className={styles.logoClients} aria-labelledby="logo-clients-heading">
      <div className={styles.container}>
        <Heading id="logo-clients-heading" level={2} className={styles.title}>
          {title}
        </Heading>

        <Swiper
          modules={[Autoplay, A11y]}
          className={styles.carousel}
          slidesPerView={2}
          spaceBetween={20}
          loop={shouldLoop}
          speed={900}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          a11y={{ enabled: true }}
          aria-label="Logos des clients"
        >
          {itemClient.map((client, index) => {
            const imageSrc = getAssetSrc(client.image.src)
            const hasLink = client.link.trim().length > 0
            const logo = (
              <img
                className={styles.logo}
                src={imageSrc}
                alt={client.image.alt}
                loading="lazy"
              />
            )

            return (
              <SwiperSlide key={`${client.image.alt}-${index}`} className={styles.slide}>
                {hasLink ? (
                  <a
                    className={styles.logoLink}
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvrir ${client.image.alt} dans un nouvel onglet`}
                  >
                    {logo}
                  </a>
                ) : (
                  <div className={styles.logoLink}>{logo}</div>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
