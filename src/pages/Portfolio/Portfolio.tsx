import { useMemo } from "react";
import { portfolioContent } from "@/ressources/content/portfolio/portfolioContent";
import { usePortfolioData } from "@/ressources/content/portfolio/usePortfolioData";
import type { Project } from "@/ressources/content/portfolio/types";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import PageIntro from "@/components/PageIntro/PageIntro";
import GridProject from "@/components/GridProject/GridProject";

export default function Portfolio() {
  const { data, loading, error, reload } = usePortfolioData();
  const { header, intro } = portfolioContent;

  const allProjects = useMemo<Project[]>(() => {
  if (!data) return [];

  const arr: Project[] = [
    ...(data.vitrine ?? []),
    ...(data.ecommerce ?? []),
    ...(data.application ?? []),
    ...(data.freelance ?? []),
  ];

  // Tri du plus récent au plus ancien :
  // - d’abord par `order` DESC (valeur la plus grande = le plus récent)
  // - fallback si `order` manquant: `id` puis `slug` (tri asc) pour stabilité
  return arr.slice().sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : Number.NEGATIVE_INFINITY;
    const bo = typeof b.order === "number" ? b.order : Number.NEGATIVE_INFINITY;
    if (bo !== ao) return bo - ao; // DESC sur `order`

    const aid = String(a.id ?? "");
    const bid = String(b.id ?? "");
    if (aid !== bid) return aid.localeCompare(bid);

    const aslug = String(a.slug ?? "");
    const bslug = String(b.slug ?? "");
    return aslug.localeCompare(bslug);
  });
}, [data]);

  return (
    <div>
      {/* H1 unique rendu par HeaderSection */}
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />

      {loading && <p>Chargement…</p>}
      {error && (
        <p role="alert">
          Une erreur est survenue. <button onClick={reload}>Réessayer</button>
        </p>
      )}

      {!!allProjects.length && (
        <GridProject projects={allProjects} />
      )}
    </div>
  );
}
