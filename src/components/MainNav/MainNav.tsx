import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import styles from './MainNav.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

// Typage
type Props = {
    className?: string
}

export default function MainNav({ className }: Props) {
    /*const activeClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : undefined

    return (
        <nav className={clsx(styles.navRoot, className)} aria-label="Main">
            <ul className={styles.list}>
                <li className={styles.link}><NavLink to="/service" className={activeClass}>Services</NavLink></li>
                <li className={styles.link}><NavLink to="/apropos" className={activeClass}>À propos</NavLink></li>
                <li className={styles.link}><NavLink to="/portfolio" className={activeClass}>Portfolio</NavLink></li>
                <li className={styles.link}><NavLink to="/blog" className={activeClass}>Blog</NavLink></li>
            </ul>
        </nav>
    )*/

    const location = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ 
        left: 0, 
        width: 0 
        });
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    const links = useMemo(() => [
        { to: "/service", label: "Services" },
        { to: "/apropos", label: "À propos" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" },
    ], []);

    // À chaque changement de route, on calcule position et largeur du lien actif
    useEffect(() => {
        const activeLink = links.find((l) => location.pathname.startsWith(l.to));
        if (activeLink && linkRefs.current[activeLink.to]) {
            const el = linkRefs.current[activeLink.to]!;
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement!.parentElement!.getBoundingClientRect();
            setIndicatorStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
            });
        } else {
            // Aucun lien actif → cacher la pill (width 0)
            setIndicatorStyle({ left: 0, width: 0 });
        }
    }, [location.pathname, links]);

    return (
        <nav className={clsx(styles.navRoot, className)} aria-label="Main">
        <ul className={styles.list}>
            {/* La pill ANIMÉE qui se déplace */}
            <motion.div
            className={styles.activeBg}
            animate={indicatorStyle}
            initial={false}
            style={{ opacity: indicatorStyle.width === 0 ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            />

            {links.map((link) => (
            <li key={link.to} className={styles.link}>
                <NavLink
                to={link.to}
                ref={(el) => {linkRefs.current[link.to] = el}}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                >
                {link.label}
                </NavLink>
            </li>
            ))}
        </ul>
        </nav>
    );
}