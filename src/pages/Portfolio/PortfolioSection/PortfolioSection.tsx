// src/pages/Portfolio/components/PortfolioSection/PortfolioSection.tsx
import type { Project } from "@/ressources/content/portfolio/types";
import type { RichText } from "@/ressources/content/contentTypes";
//import Carousel from "@/components/Carousel/Carousel";
//import CardProject from "@/components/CardProject/portfolio/CardProject";
import Heading from "@/components/Heading/Heading";
import styles from "./PortfolioSection.module.scss";

export interface PortfolioSectionProps {
  id: string;
  title: RichText;
  description: RichText;
  projects: Project[];
}

export default function PortfolioSection({
  id,
  title,
  description,
  /* projects */
}: PortfolioSectionProps) {
  return (
    <section id={id} className={styles.container}>
      <header className={styles.header}>
        <Heading level={2}>{title}</Heading>
        <p className={styles.description}>{description}</p>
      </header>

      <div className={styles.carouselWrapper}>
        {/* <Carousel
          items={projects}
          ariaLabel={`Carrousel de projets — ${title}`}
          itemsPerViewDesktop={2}
          itemsPerViewMobile={1}
          peekRatio={0.75}
          gap={1}
          renderItem={(project, ctx) => (
            <CardProject project={project} dimmed={ctx.dimmed} />
          )}
        /> */}
      </div>
    </section>
  );
}
