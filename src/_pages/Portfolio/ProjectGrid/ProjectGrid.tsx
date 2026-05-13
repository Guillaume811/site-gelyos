import type { Project } from '~/ressources/content/portfolio/types'
import ProjectCardNext from './ProjectCardNext'
import styles from './ProjectGrid.module.scss'

type Props = {
  projects: Project[]
  headingId?: string
}

/* Component ProjectGrid
 * Render logic:
 * - Keeps the same grid structure as the legacy portfolio page.
 * - Renders one card per project and returns null when list is empty.
 *
 * View TSX:
 * - Uses a section linked to heading id for accessibility.
 * - Uses Next-compatible project cards that open the shared modal provider.
 */
export default function ProjectGrid({ projects, headingId = 'projects-heading' }: Props) {
  if (!projects?.length) return null

  return (
    <section aria-labelledby={headingId} className={styles.container}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCardNext key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
