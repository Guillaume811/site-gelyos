import type { Project } from "@/ressources/content/portfolio/types";
import CardProject from "@/components/CardProject/portfolio/CardProject";
import styles from "./GridProject.module.scss";

type Props = {
  projects: Project[];
  headingId?: string; // accessibilité (id du titre associé à la section)
};

export default function GridProject({ projects, headingId = "projects-heading" }: Props) {
  if (!projects?.length) return null;

  return (
    <section aria-labelledby={headingId} className={styles.container}>
      <div className={styles.grid}>
        {projects.map((p) => (
          <CardProject key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
