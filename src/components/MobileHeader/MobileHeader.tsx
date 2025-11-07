import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence  } from "framer-motion";
import type { Variants } from "framer-motion";
import { getAllExceptMentions, type RouteItem } from "@/ressources/routes";
import clsx from "clsx";
import styles from "./MobileHeader.module.scss";
import logo from "@/assets/pictures/logo-long.webp";
import linkedinIcon from "@/assets/icons/linkedin-contact.webp";
import maltIcon from "@/assets/icons/malt.webp";

export default function MobileHeader() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Routes du menu : tout sauf Mentions légales
  const items: RouteItem[] = useMemo(() => getAllExceptMentions(), []);

  // Variants : slide du panneau (fond) depuis la droite
  const panelVariants: Variants = {
    open:   { x: 0,       transition: { type: "tween", duration: 0.25 } },
    closed: { x: "100%",  transition: { type: "tween", duration: 0.20 } },
  };

  const listVariants: Variants = {
    open:   { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    closed: {
      y: 40, // ← descend plus bas (vient du bas)
      opacity: 0,
      transition: { duration: 0.18, ease: "easeIn" },
    },
  };

  return (
    <header 
      className={styles.header} 
      role="banner" 
      aria-label="En-tête du site"
      data-open={isOpen ? "true" : "false"}
    >
      <div className={styles.container}>
        {/* Logo à gauche avec fond verre arrondi */}
        <NavLink to="/" className={styles.brand} aria-label="Aller à l’accueil">
          <span className={styles.logoWrap}>
            <img src={logo} alt="Logo GELYOS" className={styles.logo} />
          </span>
        </NavLink>

        {/* Icônes à droite : téléphone, enveloppe, burger (non cliquable) */}
        <div className={styles.actions} aria-label="Actions rapides">
          <a
            href="tel:+33677637864"
            className={clsx(styles.iconBtn, styles.phoneBtn)}
            aria-label="Appeler"
            title="Appeler"
          >
            {/* Téléphone */}
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M22 16.92v2a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.11 2h2a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z"/>
            </svg>
          </a>

          <NavLink
            to="/contact"
            className={clsx(styles.iconBtn, styles.mailBtn)}
            aria-label="Aller à la page Contact"
            title="Contact"
          >
            {/* Enveloppe */}
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 0 8 7 8-7"/>
            </svg>
          </NavLink>

           {/* Burger animé (simple switch icône) */}
          <button
            type="button"
            className={styles.iconBtn}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsOpen(o => !o)}
          >
            {/* petite anim via classe (gérée en CSS par transition/rotate si tu veux) */}
            {isOpen ? (
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            key="backdrop"
            type="button"
            className={styles.backdrop}
            aria-label="Fermer le menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

        {/* Panel : fond + liste de liens (sous le logo et les icônes) */}
      <motion.nav
        className={styles.panel}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={panelVariants}
        aria-label="Menu principal"
      >
        <motion.ul className={styles.menu} variants={listVariants}>
          {items.map((r) => (
            <motion.li key={r.path} className={styles.menuItem} variants={itemVariants}>
              <NavLink
                to={r.path}
                className={({ isActive }) =>
                  clsx(styles.menuLink, isActive && styles.active)
                }
                onClick={() => setIsOpen(false)}   // ← ferme au clic lien
              >
                {r.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
        <div className={styles.panelFooter}>
          <div className={styles.socialBox} role="group" aria-label="Réseaux sociaux">
            <a
              href="https://www.linkedin.com/in/ton-profil" /* ⬅︎ remplace */
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>

            <a
              href="https://www.malt.fr/profile/ton-profil" /* ⬅︎ remplace */
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Malt"
              title="Malt"
            >
              <img src={maltIcon} alt="Malt" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </motion.nav>

    </header>
  );
}
