import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/ressources/content/portfolio/types";
import Accordion from "@/components/Accordion/Accordion";
import Heading from "@/components/Heading/Heading";
import { PrimaryButtonLink } from "@/components/Buttons/ButtonLink";
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
                {firstImage && (
                  <>
                      <Heading level={3} className={styles.imageTitle}>
                          {firstImage.title}
                      </Heading>
                      <div className={styles.imageWrapper}>
                          <img
                              src={firstImage.src}
                              alt={firstImage.alt}
                              className={styles.image}
                          />
                    </div>
                  </>
                )}
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
