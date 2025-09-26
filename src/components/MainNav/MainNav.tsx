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

/* Component MainNav
* Render logic :
* Uses "useMemo" to get a stable list of routes with "getMainNavRoutes()".
* Uses "useLocation" to read the current URL path.
* Uses "useState" (indicatorStyle) to store the blue pill position (left, width).
* Uses "useRef" (linkRefs) to keep anchor elements by their route path.
* On every "location.pathname" change (useEffect):
*   - Finds the active route by matching the current path with "route.path".
*   - Reads the active link size/position with "getBoundingClientRect()".
*   - Finds the parent <ul> via "el.closest('ul')" to compute relative "left".
*   - Updates "indicatorStyle" so the animated pill moves to the active link.
*   - If no active link, sets width to 0 to hide the pill.

* View TSX :
* Returns a <nav> (aria-label="Navigation principale") with a <ul> list.
* Renders an animated <motion.div> (styles.activeBg) that acts as the blue pill.
* Maps "navRoutes" to <li> items with class "styles.link".
* Each item renders a <NavLink>:
*   - "to" uses the route path from the registry.
*   - "ref" stores the element in "linkRefs" for measurements.
*   - "className" adds "styles.active" when the route is active.
* The pill visibility is controlled by "indicatorStyle.width" (0 = hidden).
*/
export default function MainNav({ className }: Props) {

    const navRoutes = useMemo(() => getMainNavRoutes(), [])

    const location = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ 
        left: 0, 
        width: 0 
        });
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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
            setIndicatorStyle({ left: 0, width: 0 });
        }
    }, [location.pathname, navRoutes]);

    return (
        <nav className={clsx(styles.navRoot, className)} aria-label="Navigation principale">
            <ul className={styles.list}>
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