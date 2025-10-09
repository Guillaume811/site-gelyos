import type { To } from "react-router-dom";
import type { Project } from "@/ressources/content/portfolio/types";
import clsx from "clsx";
import CardProjectContent from "@/components/CardProject/CardProjectContent";
import { SecondaryButtonLink } from "@/components/Buttons/ButtonLink";
import styles from "./CardProject.module.scss";

export interface CardProjectProps {
  project: Project;
  /** Opacité réduite pour la 3ᵉ carte partielle */
  dimmed?: boolean;
  /** Permet de surcharger la destination du bouton (sinon /portfolio?project=<slug>) */
  to?: To;
  className?: string;
}

export default function CardProject({ project, dimmed = false, to, className }: CardProjectProps) {
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
