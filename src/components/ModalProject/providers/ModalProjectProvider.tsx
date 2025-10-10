import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ModalProject from "@/components/ModalProject/ModalProject";
import type { Project } from "@/ressources/content/portfolio/types";
import { usePortfolioData } from "@ressources/content/portfolio/usePortfolioData";
import { ModalProjectContext } from "./ModalProjectContext";

type Props = { children: ReactNode };

export function ModalProjectProvider({ children }: Props) {
  // 1) Charger toutes les données projets une seule fois
  const { data } = usePortfolioData();

  const allProjects: Project[] = useMemo(() => {
    if (!data) return [];
    return [
      ...(data.vitrine ?? []),
      ...(data.ecommerce ?? []),
      ...(data.application ?? []),
      ...(data.freelance ?? []),
    ];
  }, [data]);

  // Map globale slug -> Project
  const registry = useMemo(() => {
    const m = new Map<string, Project>();
    for (const p of allProjects) m.set(p.slug, p);
    return m;
  }, [allProjects]);

  // 2) État + synchro URL (?project=slug)
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentSlugFromURL = searchParams.get("project");
  const [slug, setSlug] = useState<string | null>(currentSlugFromURL);
  const project = slug ? registry.get(slug) ?? null : null;
  const isOpen = !!project;

  // 3) API: open/close (mémoïsées)
  const open = useCallback(
    (s: string) => {
      const next = new URLSearchParams(searchParams);
      next.set("project", s);
      setSearchParams(next, { replace: false });
      setSlug(s);
    },
    [searchParams, setSearchParams]
  );

  const close = useCallback(() => {
    const next = new URLSearchParams(searchParams);
    next.delete("project");
    navigate(
      { pathname: location.pathname, search: next.toString() },
      { replace: false }
    );
    setSlug(null);
  }, [searchParams, navigate, location.pathname]);

  // 4) Réagir aux navigations back/forward (ou édition manuelle de l’URL)
  useEffect(() => {
    if (currentSlugFromURL !== slug) {
      setSlug(currentSlugFromURL);
    }
  }, [currentSlugFromURL, slug]);

  // 5) Scroll-lock du body pendant l’ouverture
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // 6) Focus-trap + restitution du focus ; ESC pour fermer
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;

    const focusablesSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const container = containerRef.current;
      if (!container) return;
      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(focusablesSelector)
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last || !container.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus initial
    setTimeout(() => {
      const el = containerRef.current;
      const firstFocusable = el?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restituer le focus au déclencheur
      lastFocusRef.current?.focus?.();
    };
  }, [isOpen, close]);

  return (
    <ModalProjectContext.Provider value={{ open, close, isOpen, slug, project }}>
      {children}

      {/* Portal : rendu unique au niveau App */}
      {isOpen &&
        createPortal(
          <div ref={containerRef}>
            <ModalProject project={project} isOpen={isOpen} onClose={close} />
          </div>,
          document.body
        )}
    </ModalProjectContext.Provider>
  );
}
