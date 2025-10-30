import React from "react";
import { useCarousel } from "../context";

type Props = {
  /** "prev" ou "next" */
  direction: "prev" | "next";
  /** Libellé a11y (ex: "Diapo précédente") */
  ariaLabel: string;
  /** Classe(s) pour le style (ex: bouton rond translucide) */
  className?: string;
  /** Contenu du bouton (icône/texte) */
  children: React.ReactNode;
};

export default function Arrow({ direction, ariaLabel, className, children }: Props) {
  const { prev, next, canPrev, canNext, loop } = useCarousel();

  const disabled = direction === "prev" ? (!loop && !canPrev) : (!loop && !canNext);
  const onClick = direction === "prev" ? prev : next;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
