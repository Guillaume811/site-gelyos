import type { ServicePageContent } from "@/ressources/content/contentTypes";
import { intro } from "./intro";
import { devWeb } from "./devWeb";
import { devApp } from "./devApp";
import { maintenance } from "./maintenance";
import { seo } from "./seo";

export const servicesPageContent: ServicePageContent = {
  title: intro.title,
  text: intro.text,
  services: [devWeb, devApp, maintenance, seo],
};