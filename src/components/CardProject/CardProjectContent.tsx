import type { Project } from "@/ressources/content/portfolio/types";
import type { ReactNode } from "react";
import { memo } from "react";
import clsx from "clsx";

const CATEGORY_LABELS = {
  vitrine: "Sites vitrine",
  ecommerce: "E-commerce",
  application: "Applications",
  freelance: "Freelance",
} as const;

export interface CardProjectContentProps {
  project: Project;
  /** Slot action rendu par le skin (ex. <button> ou <ButtonLink/>) */
  action?: ReactNode;
  className?: string;
  /** Id du titre pour aria-labelledby (optionnel) */
  titleId?: string;
}

function CardProjectContentBase({
  project,
  action,
  className,
  titleId,
}: CardProjectContentProps) {
  const { slug, image, client, title, shortDescription } = project;
  const headingId = titleId ?? `card-${slug}-title`;

  return (
    <article className={clsx(className)} aria-labelledby={headingId} data-part="root">
      {/* Média */}
      <div data-part="media">
        <img src={image} alt={title} data-part="img" loading="lazy" decoding="async" />
      </div>

      {/* Corps */}
      <div data-part="body">
        <h3 id={headingId} data-part="title" aria-label={title}>
          {client ? <span data-part="client">{client}</span> : null}
          <span data-part="project">{title}</span>
        </h3>

        {project.category ? (
          <span data-part="category" data-category={project.category}>
            {CATEGORY_LABELS[project.category] ?? project.category}
          </span>
        ) : null}

        <p data-part="desc">{shortDescription}</p>

        <div data-part="actions">{action}</div>
      </div>
    </article>
  );
}

const CardProjectContent = memo(CardProjectContentBase);
export default CardProjectContent;