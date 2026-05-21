import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";
import buttonStyles from "@/components/Buttons/Button.module.scss";
import { servicesPreviewContent } from "@/ressources/content/home/servicesPreview";
import type { InlineContent } from "@/ressources/content/contentTypes";
import styles from "./ServicesPreview.module.scss";
import ServicesPreviewItem from "./ServicesPreviewItem";

type CSSVars = React.CSSProperties & { ["--cards-count"]?: number };

function renderInlineContent(content: InlineContent) {
  return (
    <p>
      {content.map((segment, index) => {
        switch (segment.type) {
          case "text":
            return <span key={`text-${index}`}>{segment.text}</span>;
          case "strong":
            return <strong key={`strong-${index}`}>{segment.text}</strong>;
          case "emphasis":
            return <em key={`emphasis-${index}`}>{segment.text}</em>;
          case "accent":
            return (
              <span key={`accent-${index}`} data-inline="accent">
                {segment.text}
              </span>
            );
          case "link":
            return (
              <a key={`link-${index}`} href={segment.href}>
                {segment.text}
              </a>
            );
          case "lineBreak":
            return <br key={`line-break-${index}`} />;
          default:
            return null;
        }
      })}
    </p>
  );
}

export default function ServicesPreview() {
  const { title, text, firstButton, cards } = servicesPreviewContent;

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // 0 -> dÃƒÂ©but de la section, 1 -> fin
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

      // ---- RATIO DE DÃƒâ€°PART (rÃƒÂ©glable) ----
      // ex. 0.12 = la 1ÃƒÂ¨re card commence ~12% plus bas que le centre
      const startRatio = 0;

      if (first) {
        const firstH = first.getBoundingClientRect().height;

        // offset de centrage parfait (sans biais)
        const center = (viewportH - firstH) / 2;

        // on applique un biais proportionnel ÃƒÂ  la hauteur du viewport
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

  // translation de la pile : offset de dÃƒÂ©part (ratio) - progression * pas
  const listY = useTransform(activeIndex, (v) => startOffsetPx - v * (stepPx || 0));

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-heading"
      style={{ "--cards-count": count } as CSSVars}
    >
      <div className={styles.stickyContainer}>
        {/* Colonne gauche (centrÃƒÂ©e verticalement via flex sur stickyContainer) */}
        <div className={styles.left}>
          <Heading id="services-heading" level={2}>
            {title}
          </Heading>

          <div>{renderInlineContent(text)}</div>
          
          <Link
            href={firstButton.to as string}
            className={`${buttonStyles.btn} ${buttonStyles.primary}`}
          >
            {firstButton.label}
          </Link>
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
