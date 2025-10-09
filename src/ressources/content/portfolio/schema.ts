import { z } from "zod";
import { CATEGORY_VALUES } from "./types";

/** Catégories autorisées (aligne les valeurs avec tes JSON) */
export const categorySchema = z.enum(CATEGORY_VALUES);

/** id: chaîne numérique ("01", "02"…) */
const idStringSchema = z
  .string()
  .regex(/^\d+$/, "`id` doit être une chaîne numérique (ex. \"01\")");

/** slug: kebab-case (minuscules + tirets) */
const slugSchema = z
  .string()
  .min(1, "`slug` requis")
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "`slug` doit être en kebab-case (minuscules, tirets)");

/** url: URL valide OU chaîne vide */
function isAbsoluteUrl(value: string): boolean {
  try { new URL(value); return true; } catch { return false; }
}

const urlLooseSchema = z.string().trim().refine(
  (v) => v === "" || isAbsoluteUrl(v),
  "URL invalide"
).optional();

/** Image du carrousel (modal) */
export const projectCarouselImageSchema = z.object({
  id: idStringSchema,
  src: z.string().min(1, "`src` requis"),
  title: z.string().min(1, "`title` requis"),
  alt: z.string().min(1, "`alt` requis"),
});

/** Projet (forme attendue dans chaque fichier JSON de catégorie) */
export const projectSchema = z.object({
  order: z.number().int().optional(),

  id: idStringSchema,
  slug: slugSchema,

  image: z.string().min(1, "`image` requis"),

  client: z.string().min(1).optional(),
  title: z.string().min(1, "`title` requis"),

  shortDescription: z.string().min(1, "`shortDescription` requis"),
  description: z.string().min(1, "`description` requis"),

  category: categorySchema,

  technologies: z.array(z.string().min(1)).default([]),
  features: z.array(z.string().min(1)).default([]),

  /** Résultats textuels (facultatif) */
  result: z.array(z.string().min(1)).optional(),

  url: urlLooseSchema,

  /** Carrousel d'images (facultatif) */
  carousel: z.array(projectCarouselImageSchema).optional(),
});

/** Tableau de projets (contenu d'un fichier JSON) */
export const projectArraySchema = z.array(projectSchema);

/** Mise en forme FR pour les erreurs Zod (chemin → message) */
export function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((i) => `• ${i.path.join(".") || "racine"} → ${i.message}`)
    .join("\n");
}