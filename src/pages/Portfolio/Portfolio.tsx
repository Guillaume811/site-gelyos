import { portfolioContent } from "@/ressources/content/portfolio/portfolioContent";
import { usePortfolioData } from "@/ressources/content/portfolio/usePortfolioData";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import PageIntro from "@/components/PageIntro/PageIntro";
import PortfolioSection from "./PortfolioSection/PortfolioSection";

export default function Portfolio() {
  const { data, loading, error, reload } = usePortfolioData();
  const { header, intro, sections } = portfolioContent;

  return (
    <div>
      {/* H1 unique rendu par HeaderSection */}
      <HeaderSection title={header.title} image={header.image} />

      {/* Intro immédiatement après le header */}
      <section aria-labelledby="portfolio-intro">
        {/* Pas de H1 ici : HeaderSection gère déjà le titre principal */}
        <PageIntro text={intro.text} />
      </section>

      {error && (
        <div role="alert" aria-live="polite" style={{ padding: "1rem", color: "crimson" }}>
          <p>Impossible de charger les projets.</p>
          <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
          <button onClick={reload} aria-label="Recharger les projets">
            Réessayer
          </button>
        </div>
      )}

      {loading && (
        <div role="status" aria-live="polite" style={{ padding: "1rem" }}>
          Chargement des projets…
        </div>
      )}

      {!loading && !error && data && (
        <>
          <PortfolioSection
            id="section-vitrine"
            title={sections.vitrine.title}
            description={sections.vitrine.description}
            projects={data.vitrine}
          />
          <PortfolioSection
            id="section-ecommerce"
            title={sections.ecommerce.title}
            description={sections.ecommerce.description}
            projects={data.ecommerce}
          />
          <PortfolioSection
            id="section-application"
            title={sections.application.title}
            description={sections.application.description}
            projects={data.application}
          />
          <PortfolioSection
            id="section-freelance"
            title={sections.freelance.title}
            description={sections.freelance.description}
            projects={data.freelance}
          />
        </>
      )}
    </div>
  );
}
