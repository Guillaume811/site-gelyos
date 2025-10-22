import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "@/components/Heading/Heading";
import { PrimaryButtonLink } from "@/components/Buttons/ButtonLink";
import { servicesPreviewContent } from "@/ressources/content/home/servicesPreview";
import styles from "./ServicesPreview.module.scss";
import ServicesPreviewItem from "./ServicesPreviewItem";
import ReactMarkdown from "react-markdown";

type CSSVars = React.CSSProperties & { ["--cards-count"]?: number };

export default function ServicesPreview() {
  const { title, text, firstButton, cards } = servicesPreviewContent;

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // 0 -> début de la section, 1 -> fin
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const count = cards.length;
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, count - 1]);

  // mesures dynamiques
  const [stepPx, setStepPx] = useState(0);
  const [startOffsetPx, setStartOffsetPx] = useState(0);

  useLayoutEffect(() => {
    const viewportEl = viewportRef.current;
    const listEl = listRef.current;
    if (!viewportEl || !listEl) return;

    const first = listEl.children.item(0) as HTMLElement | null;
    const second = listEl.children.item(1) as HTMLElement | null;

    const measure = () => {
      const viewportH = viewportEl.getBoundingClientRect().height;

      // ---- RATIO DE DÉPART (réglable) ----
      // ex. 0.12 = la 1ère card commence ~12% plus bas que le centre
      const startRatio = 0;

      if (first) {
        const firstH = first.getBoundingClientRect().height;

        // offset de centrage parfait (sans biais)
        const center = (viewportH - firstH) / 2;

        // on applique un biais proportionnel à la hauteur du viewport
        const biased = center + viewportH * startRatio;

        setStartOffsetPx(biased);
      }

      if (first && second) {
        const a = first.getBoundingClientRect().top;
        const b = second.getBoundingClientRect().top;
        setStepPx(b - a); // pas vertical exact entre deux cards
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(viewportEl);
    if (first) ro.observe(first);
    if (second) ro.observe(second);

    return () => ro.disconnect();
  }, [cards.length]);

  // translation de la pile : offset de départ (ratio) - progression * pas
  const listY = useTransform(activeIndex, (v) => startOffsetPx - v * (stepPx || 0));

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-heading"
      style={{ "--cards-count": count } as CSSVars}
    >
      <div className={styles.stickyContainer}>
        {/* Colonne gauche (centrée verticalement via flex sur stickyContainer) */}
        <div className={styles.left}>
          <Heading id="services-heading" level={2}>
            {title}
          </Heading>

          <div>
            <ReactMarkdown>
              {text}
            </ReactMarkdown>
          </div>
          
          <PrimaryButtonLink to={firstButton.to}>
            {firstButton.label}
          </PrimaryButtonLink>
        </div>

        {/* Colonne droite */}
        <div className={styles.right}>
          <div ref={viewportRef} className={styles.viewport}>
            <motion.div ref={listRef} className={styles.list} style={{ y: listY }}>
              {cards.map((card, index) => (
                <ServicesPreviewItem
                  key={card.id}
                  index={index}
                  activeIndex={activeIndex}
                  data={card}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
