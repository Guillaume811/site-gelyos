import { Seo } from "~/components/Seo/Seo";
import { divProcessContent } from "~/ressources/content/home/divProcessContent";
import Hero from "./Hero/Hero";
import { SectionProcess } from "./SectionProcess/SectionProcess";
import ServicesPreview from "./ServicesPreview/ServicesPreview";
import { divAvantagesContent } from "~/ressources/content/home/divAvantagesContent";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

export default function Home() {
  return (
    <>
      <Seo
        title="GELYOS | Développement web sur mesure"
        description="Sites vitrines, e-commerce et applications web pensés pour la performance, le SEO et la conversion."
        path="/"
        ogImage="/android-chrome-512x512.png"
      />
      <Hero />
      <ServicesPreview />
      <SectionProcess process={divProcessContent} avantages={divAvantagesContent} />
      <ProjectPreview />
    </>
  )
}
