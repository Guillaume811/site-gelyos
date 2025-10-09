import clsx from "clsx";
import useCarousel from "./useCarousel";
import styles from "./Carousel.module.scss";

type RenderCtx = ReturnType<typeof useCarousel>["getRenderCtx"] extends (i: number) => infer R
  ? R
  : never;

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, ctx: RenderCtx) => React.ReactNode;

  // Mise en page
  itemsPerViewDesktop: 1 | 2;
  itemsPerViewMobile?: 1;
  peekRatio?: number;
  gap?: number; // rem

  // Comportement
  initialIndex?: number;
  loop?: boolean;
  holdIntervalMs?: number;
  drag?: boolean;
  keyboard?: boolean;

  // Contrôlé (optionnel)
  index?: number;
  onIndexChange?: (i: number) => void;

  // A11y & divers
  ariaLabel?: string;
  id?: string;
  className?: string;
};

export default function Carousel<T>(props: CarouselProps<T>) {
  const {
    items,
    renderItem,
    itemsPerViewDesktop,
    itemsPerViewMobile = 1,
    peekRatio = 0.75,
    gap = 1,
    initialIndex = 0,
    loop = false,
    holdIntervalMs = 160,
    drag = true,
    keyboard = true,
    index,
    onIndexChange,
    ariaLabel,
    id,
    className,
  } = props;

  const c = useCarousel({
    itemCount: items.length,
    itemsPerViewDesktop,
    itemsPerViewMobile,
    gapRem: gap,
    peekRatio,
    defaultIndex: initialIndex,
    index,
    onIndexChange,
    loop,
    holdIntervalMs,
    enableDrag: drag,
    enableKeyboard: keyboard,
  });

  return (
    <div className={clsx(styles.root, className)} role="region" aria-label={ariaLabel} id={id}>
      <div className={styles.srOnly} aria-live="polite">
        {c.announceLabel}
      </div>

      <div
        ref={c.viewportRef}
        className={styles.viewport}
        style={c.getViewportStyle()}
        tabIndex={0}
        onKeyDown={c.onViewportKeyDown}
        onScroll={c.onViewportScroll}
        aria-roledescription="carrousel"
      >
        <div className={styles.track} style={c.getTrackStyle()}>
          {items.map((item, i) => (
            <div
              key={i}
              className={styles.slide}
              style={c.getSlideStyle()}
              aria-hidden={!(i >= c.currentIndex && i < c.currentIndex + c.itemsPerView + 1)}
            >
              {renderItem(item, c.getRenderCtx(i))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Précédent"
            aria-controls={id}
            onPointerDown={() => c.startHold("prev")}
            onPointerUp={c.stopHold}
            onPointerLeave={c.stopHold}
            onClick={(e) => {
              e.preventDefault();
              c.prev();
            }}
            disabled={!c.canGoPrev}
          >
            ←
          </button>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Suivant"
            aria-controls={id}
            onPointerDown={() => c.startHold("next")}
            onPointerUp={c.stopHold}
            onPointerLeave={c.stopHold}
            onClick={(e) => {
              e.preventDefault();
              c.next();
            }}
            disabled={!c.canGoNext}
          >
            →
          </button>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Navigation du carrousel">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              className={clsx(styles.dot, i === c.currentIndex && styles.dotActive)}
              aria-selected={i === c.currentIndex}
              aria-label={`Aller à l'élément ${i + 1}`}
              onClick={() => c.setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
