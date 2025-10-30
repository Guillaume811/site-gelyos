//import React from "react";
import { useCarousel } from "../context";

type Props = {
  /** Classe à appliquer au conteneur des dots */
  className?: string;
  /** Classe pour chaque dot (état actif via aria-current) */
  dotClassName?: string;
  /** Libellé a11y pour la liste de pagination */
  ariaLabel?: string; // ex: "Pagination du carrousel"
};

export default function IndexDots({ className, dotClassName, ariaLabel }: Props) {
  const { length, current, goTo } = useCarousel();

  if (length <= 1) return null;

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={className}
    >
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-label={`Aller à la diapo ${i + 1}`}
          aria-current={i === current ? "true" : undefined}
          className={dotClassName}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  );
}
