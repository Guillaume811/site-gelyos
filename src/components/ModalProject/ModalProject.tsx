import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project, ProjectCarouselImage } from "@/ressources/content/portfolio/types";
import Accordion from "@/components/Accordion/Accordion";
import Heading from "@/components/Heading/Heading";
import { PrimaryButtonLink } from "@/components/Buttons/ButtonLink";
import PictureCarousel from "@/components/Carousel/PictureCarousel/PictureCarousel";
import type { PictureItem } from "@/components/Carousel/PictureCarousel/PictureCarousel";
import styles from "./ModalProject.module.scss";

type ModalProjectProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalProject({ project, isOpen, onClose }: ModalProjectProps) {
  if (!project) return null;

  const firstImage = project.carousel?.[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            

            <div className={styles.content}>
              {/* Bouton de fermeture */}
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Fermer la modale"
              >
                <X aria-hidden="true" />
              </button>

              <div className={styles.left}>

                {(() => {
                    const DEBUG_CAROUSEL = true;

                    // 1) Datasource brute
                    const source: ProjectCarouselImage[] = project.carousel ?? [];

                    // 2) Fallback éventuel
                    const hasFallback = Boolean(firstImage);

                    // 3) Mapping → PictureItem[]
                    const items: PictureItem[] =
                      source.map((it) => ({
                        src: it.src,                                 // on ne modifie PAS les chemins ici
                        alt: it.alt ?? project.title,
                        title: it.title,
                      }));

                    if (!items.length && hasFallback && firstImage) {
                      items.push({
                        src: firstImage.src,
                        alt: firstImage.alt,
                        title: firstImage.title,
                      });
                    }

                    // 4) Logs détaillés
                    if (DEBUG_CAROUSEL) {
                      // group pour ne pas polluer la console
                      
                      console.groupCollapsed?.(
                        `[ModalProject] Carousel (${String(project.id)} — ${project.title})`
                      );

                      console.log("BASE_URL (vite):", import.meta.env.BASE_URL);
                      console.log("project.id:", project.id);
                      console.log("project.title:", project.title);
                      console.log("carousel (source):", source);
                      console.log("firstImage (fallback):", firstImage ?? null);

                      // on liste les URLs finales
                      console.table(
                        items.map((it, idx) => ({
                          idx,
                          src: it.src,
                          alt: it.alt,
                          title: it.title ?? "",
                        }))
                      );

                      if (!items.length) {
                        console.warn(
                          "[ModalProject] Aucun item pour le carousel. Vérifie project.carousel[] OU firstImage."
                        );
                      }

                      
                      console.groupEnd?.();
                    }

                    // 5) Affichage
                    return items.length ? <PictureCarousel items={items} /> : null;
                  })()}

              </div>

              <div className={styles.right}>
                <div className={styles.scrollArea} role="region" aria-label="Détails du projet">
                  {/* Logo du client */}
                  {project.image && (
                      <img
                      src={project.image}
                      alt={`Logo du client ${project.client ?? ""}`}
                      className={styles.logo}
                      />
                  )}

                  {/* Infos projet */}
                  {project.client && (
                      <Heading level={4} className={styles.client}>
                      {project.client}
                      </Heading>
                  )}

                  <Heading
                      level={2}
                      id={`modal-title-${project.id}`}
                      className={styles.title}
                  >
                      {project.title}
                  </Heading>

                  <p className={styles.description}>{project.description}</p>

                  {/* Accordéon (à adapter selon ton contenu) */}
                  {project.accordionItems && project.accordionItems.length > 0 && (
                      <Accordion items={project.accordionItems} />
                  )}

                  {/* Lien vers le site */}
                  {project.url && (
                      <PrimaryButtonLink
                      to={project.url}
                      className={styles.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Voir le site
                      </PrimaryButtonLink>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
