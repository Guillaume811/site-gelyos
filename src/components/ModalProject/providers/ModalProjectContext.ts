import { createContext } from "react";
import type { Project } from "@/ressources/content/portfolio/types";

export type ModalProjectContext = {
  open: (slug: string) => void;
  close: () => void;
  isOpen: boolean;
  slug: string | null;
  project: Project | null;
};

export const ModalProjectContext = createContext<ModalProjectContext | null>(null);