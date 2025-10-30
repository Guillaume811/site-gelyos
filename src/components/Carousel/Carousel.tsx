import React, { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import { CarouselContext, type CarouselApi } from "./context";

type ClassNames = Partial<{
  root: string;
  viewport: string;
  track: string;
  slide: string;
}>;

type CarouselProps = {
  length: number;                              // nombre de slides
  renderSlide: (index: number) => ReactNode;   // rendu d’une slide
  loop?: boolean;                              // loop infini
  initial?: number;                            // index initial
  onIndexChange?: (index: number) => void;     // callback changement
  transitionDurationMs?: number;               // durée anim
  className?: string;
  classNames?: ClassNames;                     // classes pour styler
  ariaLabel?: string;                          // label a11y
  children?: ReactNode;
};

export default function Carousel({
  length,
  renderSlide,
  loop = true,
  initial = 0,
  onIndexChange,
  transitionDurationMs = 350,
  className,
  classNames,
  ariaLabel,
  children,
}: CarouselProps) {
  const hasSlides = length > 0;
  const safeInitial = clamp(initial, 0, Math.max(0, length - 1));

  // index réel (0..length-1)
  const [current, setCurrent] = useState<number>(safeInitial);

  // index affiché (avec clone en tête si loop)
  const displayIndex = loop ? current + 1 : current;

  // état d’animation
  const [animate, setAnimate] = useState<boolean>(true);

  // swipe
  const vpRef = useRef<HTMLDivElement | null>(null);
  const [dragPx, setDragPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(0);

  const canPrev = loop ? true : current > 0;
  const canNext = loop ? true : current < length - 1;

  const goTo = useCallback(
    (i: number) => {
      if (!hasSlides) return;
      const next = loop ? mod(i, length) : clamp(i, 0, length - 1);
      setAnimate(true);
      setCurrent(next);
      onIndexChange?.(next);
    },
    [hasSlides, loop, length, onIndexChange]
  );

  const prev = useCallback(() => {
    if (!hasSlides) return;
    if (!loop && current <= 0) return;
    setAnimate(true);
    setCurrent((c) => (loop ? mod(c - 1, length) : Math.max(0, c - 1)));
  }, [hasSlides, loop, length, current]);

  const next = useCallback(() => {
    if (!hasSlides) return;
    if (!loop && current >= length - 1) return;
    setAnimate(true);
    setCurrent((c) => (loop ? mod(c + 1, length) : Math.min(length - 1, c + 1)));
  }, [hasSlides, loop, length, current]);

  // clavier
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  // swipe (pointer events)
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!vpRef.current) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setAnimate(false);
    startXRef.current = e.clientX;
    setDragPx(0);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const delta = e.clientX - startXRef.current;
      setDragPx(delta);
    },
    [dragging]
  );

  const onPointerUp = useCallback(() => {
      if (!dragging || !vpRef.current) return;
      setDragging(false);
      setAnimate(true);

      const vpWidth = vpRef.current.getBoundingClientRect().width || 1;
      const ratio = dragPx / vpWidth;

      if (ratio <= -0.25) {
        next();
      } else if (ratio >= 0.25) {
        prev();
      } else {
        setCurrent((c) => c); // snap back
      }
      setDragPx(0);
    },
    [dragging, dragPx, next, prev]
  );

  // gestion loop via clones : transition end (placeholder si logique additionnelle)
  const onTransitionEnd = useCallback(() => {
    if (!loop) return;
    // current est déjà “réel” chez nous, rien à réaligner ici.
  }, [loop]);

  // style transform
  const translatePct = useMemo(() => {
    const vpWidth = vpRef.current?.getBoundingClientRect().width || 1;
    const dragPct = dragging ? (dragPx / vpWidth) * 100 : 0;
    const base = (loop ? displayIndex : current) * -100;
    return base + dragPct;
  }, [dragPx, dragging, current, displayIndex, loop]);

  // indexes à afficher (avec clones si loop)
  const displayIndexes = useMemo(() => {
    if (!hasSlides) return [] as number[];
    if (!loop) return range(0, length - 1);
    return [-1, ...range(0, length - 1), length]; // clone last, 0..n-1, clone first
  }, [hasSlides, length, loop]);

  const api: CarouselApi = useMemo(
    () => ({ length, current, goTo, next, prev, canPrev, canNext, loop }),
    [length, current, goTo, next, prev, canPrev, canNext, loop]
  );

  return (
    <CarouselContext.Provider value={api}>
      <div
        className={[classNames?.root, className].filter(Boolean).join(" ")}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
        <div
          ref={vpRef}
          className={classNames?.viewport}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            className={classNames?.track}
            style={{
              width: `${displayIndexes.length * 100}%`,
              transform: `translateX(${translatePct}%)`,
              transition: animate ? `transform ${transitionDurationMs}ms ease` : "none",
              display: "flex",
              willChange: "transform",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {displayIndexes.map((di, i) => {
              const realIndex = di === -1 ? length - 1 : di === length ? 0 : di;
              return (
                <div
                  key={`${di}:${i}`}
                  className={classNames?.slide}
                  style={{ flex: "0 0 100%" }}
                  aria-roledescription="slide"
                  aria-label={`${realIndex + 1} / ${length}`}
                >
                  {renderSlide(realIndex)}
                </div>
              );
            })}
          </div>
        </div>
        {/* ⬇️ LES CONTRÔLES VIVENT DANS LE PROVIDER */}
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

/* --------------- utils internes (non exportés) --------------- */

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
function range(a: number, b: number) {
  const out: number[] = [];
  for (let i = a; i <= b; i++) out.push(i);
  return out;
}
