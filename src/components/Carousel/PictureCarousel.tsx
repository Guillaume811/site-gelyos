//import React from "react";
import Carousel from "./Carousel";
import Arrow from "./parts/Arrow";
import IndexDots from "./parts/IndexDots";
import styles from "./Carousel.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PictureItem = {
  src: string;
  alt: string;
  title?: string;
};

type Props = {
  items: PictureItem[];
  className?: string;
  ariaLabel?: string;
  loop?: boolean;
  transitionDurationMs?: number;
};

export default function PictureCarousel({
  items,
  className,
  ariaLabel = "Carrousel d'images",
  loop = true,
  transitionDurationMs = 350,
}: Props) {
  return (
    <div className={className}>
        <Carousel
            length={items.length}
            loop={loop}
            transitionDurationMs={transitionDurationMs}
            ariaLabel={ariaLabel}
            classNames={{
            root: styles.root,
            viewport: styles.viewport,
            track: styles.track,
            slide: styles.slide,
            }}
            renderSlide={(index) => {
            const it = items[index];
            return (
                <figure>
                <img src={it.src} alt={it.alt} />
                {it.title ? <figcaption aria-hidden="true">{it.title}</figcaption> : null}
                </figure>
            );
            }}
        >

            {/* Contrôles superposés */}
            <div className={styles.controls} aria-hidden="true">
                <div className={styles.arrows}>
                <Arrow direction="prev" ariaLabel="Diapo précédente" className={styles.arrow}>
                    <ChevronLeft aria-hidden="true" />
                </Arrow>
                <Arrow direction="next" ariaLabel="Diapo suivante" className={styles.arrow}>
                    <ChevronRight aria-hidden="true" />
                </Arrow>
                </div>

                <IndexDots className={styles.dots} dotClassName={styles.dot} ariaLabel="Pagination du carrousel" />
            </div>
        </Carousel>
    </div>
  );
}
