import type { ServicePageContent } from "@/ressources/content/contentTypes";
import { headerServices, introServices } from "./headerIntro";
import { devWeb } from "./devWeb";
import { devApp } from "./devApp";
import { maintenance } from "./maintenance";
import { seo } from "./seo";

export const servicesPageContent: ServicePageContent = {
  header: headerServices,
  intro: introServices,
  services: [devWeb, devApp, maintenance, seo]
};