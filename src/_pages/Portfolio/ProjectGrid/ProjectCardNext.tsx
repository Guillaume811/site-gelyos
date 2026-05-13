'use client'

import type { MouseEvent } from 'react'
import type { Project } from '~/ressources/content/portfolio/types'
import clsx from 'clsx'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import CardProjectContent from '~/components/CardProject/CardProjectContent'
import { useModalProject } from '~/components/ModalProject/providers/useModalProject'
import cardStyles from '~/components/CardProject/portfolio/CardProject.module.scss'

type Props = {
  project: Project
  dimmed?: boolean
  to?: string
  className?: string
}

/* Component ProjectCardNext
 * Render logic:
 * - Reuses shared modal context to open project details without page navigation.
 * - Keeps portfolio card skin and button styling from existing shared styles.
 *
 * View TSX:
 * - Renders CardProjectContent with the same action label and accessibility attribute.
 * - Uses an anchor fallback URL matching the current portfolio query convention.
 */
export default function ProjectCardNext({
  project,
  dimmed = false,
  to,
  className,
}: Props) {
  const { open } = useModalProject()
  const resolvedTo = to ?? `/portfolio?project=${project.slug}`

  function handleOpenProjectModal(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    open(project.slug)
  }

  return (
    <div className={clsx(cardStyles.root, dimmed && cardStyles.dimmed, className)}>
      <CardProjectContent
        project={project}
        action={
          <a
            href={resolvedTo}
            className={`${buttonStyles.btn} ${buttonStyles.secondary} ${cardStyles.actionBtn}`}
            onClick={handleOpenProjectModal}
            aria-haspopup="dialog"
          >
            Découvrir
          </a>
        }
      />
    </div>
  )
}
