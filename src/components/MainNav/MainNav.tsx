import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import styles from './MainNav.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { getMainNavRoutes } from '@/ressources/routes'

// Typage
type Props = {
    className?: string
}

export default function MainNav({ className }: Props) {

    const navRoutes = useMemo(() => getMainNavRoutes(), [])

    const location = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ 
        left: 0, 
        width: 0 
        });
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    // À chaque changement de route, on calcule position et largeur du lien actif
    useEffect(() => {
        const activeLink = navRoutes.find((r) => location.pathname.startsWith(r.path));

        if (activeLink && linkRefs.current[activeLink.path]) {
            const el = linkRefs.current[activeLink.path]!;
            const rect = el.getBoundingClientRect();
            const ul = el.closest('ul')
            const parentRect = ul ? ul.getBoundingClientRect() : rect
            setIndicatorStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
            });
        } else {
            // Aucun lien actif → cacher la pill (width 0)
            setIndicatorStyle({ left: 0, width: 0 });
        }
    }, [location.pathname, navRoutes]);

    return (
        <nav className={clsx(styles.navRoot, className)} aria-label="Navigation principale">
            <ul className={styles.list}>
                {/* La pill ANIMÉE qui se déplace */}
                <motion.div
                className={styles.activeBg}
                animate={indicatorStyle}
                initial={false}
                style={{ opacity: indicatorStyle.width === 0 ? 0 : 1 }}
                transition={{ type: "spring", stiffness: 600, damping: 30 }}
                />

                {navRoutes.map((route) => (
                <li key={route.name} className={styles.link}>
                    <NavLink
                    to={route.path}
                    ref={(el) => {linkRefs.current[route.path] = el}}
                    className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                    {route.label}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>
    );
}