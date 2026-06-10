import type { ServicePageContent } from "@/ressources/content/contentTypes";
import { headerServices, introServices } from "./headerIntro";
import { landingPage } from "./landingPage";
import { siteVitrine } from "./siteVitrine";
import { siteEcommerce } from "./siteEcommerce";
import { maintenance } from "./maintenance";
import { seo } from "./seo";

export const servicesPageContent: ServicePageContent = {
  header: headerServices,
  intro: introServices,
  services: [landingPage, siteVitrine, siteEcommerce, maintenance, seo]
};
