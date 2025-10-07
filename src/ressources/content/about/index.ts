import type { AboutPageContent } from "@/ressources/content/contentTypes";
import { aboutIntro } from "./intro";
import { parcours } from "./parcours";
import { expertise } from "./expertise";
import { technologies } from "./technologies";

export const aboutPageContent: AboutPageContent = {
  title: aboutIntro.title,
  sections: [parcours, expertise, technologies],
};