import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export type UseCarouselOptions = {
  itemCount: number;

  // Mise en page
  itemsPerViewDesktop: 1 | 2;
  itemsPerViewMobile?: 1;
  gapRem?: number;       // 1 par défaut
  peekRatio?: number;    // 0.75 par défaut

  // Index contrôlé / non contrôlé
  index?: number;
  defaultIndex?: number; // 0 par défaut
  onIndexChange?: (i: number) => void;

  // Comportement
  loop?: boolean;              // false par défaut
  holdIntervalMs?: number;     // 160ms par défaut
  enableDrag?: boolean;        // true par défaut
  enableKeyboard?: boolean;    // true par défaut
};

export type RenderCtx = {
  index: number;
  isActive: boolean;
  isNext: boolean;
  isPeek: boolean;
  dimmed: boolean; // alias
};

export type UseCarouselReturn = {
  // ✅ MutableRefObject<HTMLDivElement | null> pour matcher useRef(null)
  viewportRef: React.MutableRefObject<HTMLDivElement | null>;

  isDesktop: boolean;
  itemsPerView: number;
  maxIndex: number;
  currentIndex: number;

  slideWidth: number;  // px
  gapPx: number;       // px
  peekPx: number;      // px

  announceLabel: string;

  // nav
  prev(): void;
  next(): void;
  setIndex(i: number, behavior?: ScrollBehavior): void;
  scrollToIndex(i: number, behavior?: ScrollBehavior): void;

  // hold-to-scroll
  startHold(dir: "prev" | "next"): void;
  stopHold(): void;

  // handlers
  onViewportKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void;
  onViewportScroll(): void;

  // helpers rendu
  getRenderCtx(i: number): RenderCtx;
  getSlideStyle(): React.CSSProperties;
  getTrackStyle(): React.CSSProperties;
  // ✅ utilise la largeur interne, plus besoin de paramètre
  getViewportStyle(): React.CSSProperties;

  // ARIA
  canGoPrev: boolean;
  canGoNext: boolean;

  // drag config (pour le composant)
  enableDrag: boolean;
};

export default function useCarousel(opts: UseCarouselOptions): UseCarouselReturn {
  const {
    itemCount,
    itemsPerViewDesktop,
    itemsPerViewMobile = 1,
    gapRem = 1,
    peekRatio = 0.75,
    index: controlledIndex,
    defaultIndex = 0,
    onIndexChange,
    loop = false,
    holdIntervalMs = 160,
    enableDrag = true,
    enableKeyboard = true,
  } = opts;

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // breakpoint simple
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const itemsPerView = isDesktop ? itemsPerViewDesktop : itemsPerViewMobile;
  const maxIndex = Math.max(0, itemCount - itemsPerView);

  // rem → px
  const remPx = useMemo(() => {
    if (typeof window === "undefined") return 16;
    const rs = getComputedStyle(document.documentElement).fontSize;
    const n = parseFloat(rs);
    return Number.isFinite(n) ? n : 16;
  }, []);
  const gapPx = gapRem * remPx;

  // mesures
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportWidth(el.clientWidth));
    ro.observe(el);
    setViewportWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (viewportWidth <= 0) return;
    const n = itemsPerView;
    const totalGaps = Math.max(0, n - 1) * gapPx;
    const w = Math.max(0, (viewportWidth - totalGaps) / n);
    setSlideWidth(w);
  }, [viewportWidth, itemsPerView, gapPx]);

  const itemStride = slideWidth + gapPx;

  // index contrôlé / non contrôlé
  const [uncontrolledIndex, setUncontrolledIndex] = useState<number>(defaultIndex);
  const isControlled = controlledIndex != null;
  const currentIndex = Math.min(
    maxIndex,
    Math.max(0, isControlled ? (controlledIndex as number) : uncontrolledIndex)
  );

  const internalSetIndex = useCallback(
    (i: number) => {
      const next = Math.min(maxIndex, Math.max(0, i));
      if (isControlled) {
        onIndexChange?.(next);
      } else {
        setUncontrolledIndex(next);
        onIndexChange?.(next);
      }
    },
    [isControlled, maxIndex, onIndexChange]
  );

  // scroll programmatique
  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const vp = viewportRef.current;
      if (!vp) return;
      const left = i * itemStride;
      vp.scrollTo({ left, behavior });
    },
    [itemStride]
  );

  const setIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      internalSetIndex(i);
      scrollToIndex(i, behavior);
    },
    [internalSetIndex, scrollToIndex]
  );

  // init scroll quand prêt
  useEffect(() => {
    if (!viewportRef.current) return;
    scrollToIndex(currentIndex, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideWidth, gapPx, itemsPerView]);

  // sync index au scroll natif
  const scrollLock = useRef(false);
  const onViewportScroll = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp || scrollLock.current) return;
    const raw = itemStride > 0 ? vp.scrollLeft / itemStride : 0;
    const idx = Math.round(raw);
    if (idx !== currentIndex) {
      internalSetIndex(idx);
    }
  }, [currentIndex, internalSetIndex, itemStride]);

  // déverrouille après scroll programmatique
  useEffect(() => {
    scrollLock.current = true;
    const t = window.setTimeout(() => {
      scrollLock.current = false;
    }, 220);
    return () => window.clearTimeout(t);
  }, [currentIndex]);

  // nav
  const prev = useCallback(() => {
    if (!loop && currentIndex <= 0) return;
    setIndex(loop ? (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1) : currentIndex - 1);
  }, [currentIndex, loop, maxIndex, setIndex]);

  const next = useCallback(() => {
    if (!loop && currentIndex >= maxIndex) return;
    setIndex(loop ? (currentIndex + 1) % (maxIndex + 1) : currentIndex + 1);
  }, [currentIndex, loop, maxIndex, setIndex]);

  // hold-to-scroll
  const holdTimer = useRef<number | null>(null);
  const startHold = (dir: "prev" | "next") => {
    stopHold();
    const fn = dir === "prev" ? prev : next;
    fn();
    holdTimer.current = window.setInterval(fn, holdIntervalMs) as unknown as number;
  };
  const stopHold = () => {
    if (holdTimer.current != null) {
      window.clearInterval(holdTimer.current);
      holdTimer.current = null;
    }
  };

  // clavier
  const onViewportKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!enableKeyboard) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // helpers rendu
  const getRenderCtx = useCallback(
    (i: number): RenderCtx => {
      const isActive = i === currentIndex;
      const isNext = i === currentIndex + 1;
      const isPeek = itemsPerView === 2 ? i === currentIndex + 2 : i === currentIndex + 1;
      return { index: i, isActive, isNext, isPeek, dimmed: isPeek };
    },
    [currentIndex, itemsPerView]
  );

  const getSlideStyle = useCallback((): React.CSSProperties => {
    return {
      minWidth: `${slideWidth}px`,
      maxWidth: `${slideWidth}px`,
      scrollSnapAlign: "start",
    };
  }, [slideWidth]);

  const getTrackStyle = useCallback((): React.CSSProperties => {
    return { columnGap: `${gapRem}rem` };
  }, [gapRem]);

  const peekPx = slideWidth * peekRatio;
  const getViewportStyle = useCallback(
    (): React.CSSProperties => ({
      paddingRight: `${Math.max(0, Math.min(peekPx, viewportWidth))}px`,
    }),
    [peekPx, viewportWidth]
  );

  const canGoPrev = loop ? true : currentIndex > 0;
  const canGoNext = loop ? true : currentIndex < maxIndex;

  const currentHuman = Math.min(itemCount, currentIndex + 1);
  const totalHuman = Math.max(0, itemCount);
  const announceLabel = `Élément ${currentHuman} sur ${totalHuman}`;

  // vendor property via setProperty (sans erreur TS)
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    if (enableDrag) {
      vp.style.overflowX = "auto";
      vp.style.scrollSnapType = "x mandatory";
      vp.style.setProperty("-webkit-overflow-scrolling", "touch");
    } else {
      vp.style.overflowX = "hidden";
      vp.style.scrollSnapType = "none";
      vp.style.setProperty("-webkit-overflow-scrolling", "auto");
    }
  }, [enableDrag]);

  return {
    viewportRef,
    isDesktop,
    itemsPerView,
    maxIndex,
    currentIndex,
    slideWidth,
    gapPx,
    peekPx,
    announceLabel,
    prev,
    next,
    setIndex,
    scrollToIndex,
    startHold,
    stopHold,
    onViewportKeyDown,
    onViewportScroll,
    getRenderCtx,
    getSlideStyle,
    getTrackStyle,
    getViewportStyle,
    canGoPrev,
    canGoNext,
    enableDrag,
  };
}
