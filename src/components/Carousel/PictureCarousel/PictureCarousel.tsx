import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import styles from "./PictureCarousel.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PictureItem = {
  src: string;
  alt: string;
  title?: string;
};

type Props = {
  items: PictureItem[];
  className?: string;
  ariaLabel?: string; // ex: "Carrousel d'images"
  loop?: boolean;     // défaut: true
};

function NavButtons() {
  const swiper = useSwiper();
  return (
    <>
      <button className={styles.navPrev} aria-label="Diapo précédente" onClick={() => swiper.slidePrev()}>
        <ChevronLeft aria-hidden="true" strokeWidth={3} />
      </button>
      <button className={styles.navNext} aria-label="Diapo suivante" onClick={() => swiper.slideNext()}>
        <ChevronRight aria-hidden="true" strokeWidth={3} />
      </button>
    </>
  );
}

export default function PictureCarousel({
  items,
  className,
  ariaLabel = "Carrousel d'images",
  loop = true,
}: Props) {
  if (!items?.length) return null;

  return (
    <div className={[styles.root, styles.picture, className].filter(Boolean).join(" ")}>
      <Swiper
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }} // index sous le viewport, centré
        loop={loop}
        a11y={{ enabled: true }}
        aria-label={ariaLabel}
        className={styles.viewport}
      >
        {items.map((it, idx) => (
          <SwiperSlide className={styles.slide} key={idx} aria-roledescription="slide" aria-label={`${idx + 1} / ${items.length}`}>
            <figure className={styles.figure}>
              <div className={styles.imageLayer}>
                {it.title ? (
                  <figcaption className={styles.caption} aria-hidden="true">
                    {it.title}
                  </figcaption>
                ) : null}
                <img className={styles.image} src={it.src} alt={it.alt} />
              </div>
              
            </figure>
          </SwiperSlide>
        ))}

        <NavButtons />

      </Swiper>
    </div>
  );
}
