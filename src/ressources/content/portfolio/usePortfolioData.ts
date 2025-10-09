import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projectArraySchema, formatZodError } from "./schema";
import type { PortfolioData, Project, Category } from "./types";

// Catégorie → fichier JSON (dans public/data/portfolio)
const FILE_BY_CATEGORY: Record<Category, string> = {
  vitrine: "sites-vitrine.json",
  ecommerce: "ecommerce.json",
  application: "applications.json",
  freelance: "freelance.json",
};

function withBase(path: string): string {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  return `${base}/${clean}`;
}

async function fetchCategory(
  category: Category,
  signal?: AbortSignal
): Promise<Project[]> {
  const filename = FILE_BY_CATEGORY[category];
  const url = withBase(`data/portfolio/${filename}`);

  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Échec du chargement (${res.status}) de: ${url}`);
  }

  const json = (await res.json()) as unknown;
  const parsed = projectArraySchema.safeParse(json);
  if (!parsed.success) {
    throw new Error(`Données invalides pour "${category}":\n${formatZodError(parsed.error)}`);
  }

  // Tri: d'abord par "order" si présent, sinon par "id" (chaîne, ex. "01" < "02")
  return [...parsed.data].sort((a, b) => {
    const ao = a.order ?? Number.MAX_SAFE_INTEGER;
    const bo = b.order ?? Number.MAX_SAFE_INTEGER;
    if (ao !== bo) return ao - bo;
    return a.id.localeCompare(b.id, "fr");
  });
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const [vitrine, ecommerce, application, freelance] = await Promise.all([
        fetchCategory("vitrine", controller.signal),
        fetchCategory("ecommerce", controller.signal),
        fetchCategory("application", controller.signal),
        fetchCategory("freelance", controller.signal),
      ]);

      setData({ vitrine, ecommerce, application, freelance });
    } catch (e) {
        // ⬇️ gestion plus fine de l’erreur
        if (e instanceof DOMException && e.name === "AbortError") {
          // ✅ requête annulée volontairement → on ne fait rien
          return;
        }

        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    return () => abortRef.current?.abort();
  }, [load]);

  return useMemo(
    () => ({ data, loading, error, reload: load }),
    [data, loading, error, load]
  );
}