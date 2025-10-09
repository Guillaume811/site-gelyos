import type { To } from "react-router-dom";
import type { Project } from "@/ressources/content/portfolio/types";
import clsx from "clsx";
import CardProjectContent from "@/components/CardProject/CardProjectContent";
import { SecondaryButtonLink } from "@/components/Buttons/ButtonLink";
import styles from "./CardProjectHome.module.scss";

export interface CardProjectHomeProps {
  project: Project;
  /** Permet de surcharger la destination du bouton (sinon /portfolio?project=<slug>) */
  to?: To;
  /** Opacité réduite pour la carte partielle (si besoin côté carousel home) */
  dimmed?: boolean;
  className?: string;
}

export default function CardProjectHome({
  project,
  to,
  dimmed = false,
  className,
}: CardProjectHomeProps) {
  const resolvedTo: To = to ?? `/portfolio?project=${project.slug}`;

  return (
    <div className={clsx(styles.root, dimmed && styles.dimmed, className)}>
      <CardProjectContent
        project={project}
        action={
          <SecondaryButtonLink to={resolvedTo} className={styles.actionBtn}>
            Découvrir
          </SecondaryButtonLink>
        }
      />
    </div>
  );
}
