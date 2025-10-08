import type { AboutPageContent } from "@/ressources/content/contentTypes";
import { headerAbout } from "./headerAbout";
import { parcours } from "./parcours";
import { expertise } from "./expertise";
import { technologies } from "./technologies";

export const aboutPageContent: AboutPageContent = {
  header: headerAbout,
  sections: [parcours, expertise, technologies],
};