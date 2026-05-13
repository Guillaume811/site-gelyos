'use client'

import type { MouseEvent } from 'react'
import type { Project } from '~/ressources/content/portfolio/types'
import clsx from 'clsx'
import CardProjectContent from '~/components/CardProject/CardProjectContent'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import { useModalProject } from '~/components/ModalProject/providers/useModalProject'
import styles from './CardProjectHome.module.scss'

export interface CardProjectHomeNextProps {
  project: Project
  to?: string
  dimmed?: boolean
  className?: string
}

export default function CardProjectHomeNext({
  project,
  to,
  dimmed = false,
  className,
}: CardProjectHomeNextProps) {
  const { open } = useModalProject()
  const resolvedTo = to ?? `/portfolio?project=${project.slug}`

  function handleOpenProjectModal(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    open(project.slug)
  }

  return (
    <div className={clsx(styles.root, dimmed && styles.dimmed, className)}>
      <CardProjectContent
        project={project}
        action={
          <a
            href={resolvedTo}
            className={`${buttonStyles.btn} ${buttonStyles.secondary} ${styles.actionBtn}`}
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

