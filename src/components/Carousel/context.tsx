import { createContext, useContext } from "react";

export type CarouselApi = {
  length: number;
  current: number;               // index réel [0..length-1]
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
  canPrev: boolean;
  canNext: boolean;
  loop: boolean;
};

export const CarouselContext = createContext<CarouselApi | null>(null);

export function useCarousel(): CarouselApi {
  const ctx = useContext(CarouselContext);
  if (!ctx) {
    throw new Error("useCarousel must be used inside <Carousel> provider.");
  }
  return ctx;
}
