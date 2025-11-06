import { divProcessContent } from "@/ressources/content/home/divProcessContent";
import Hero from "./Hero/Hero";
import { SectionProcess } from "./SectionProcess/SectionProcess";
import ServicesPreview from "./ServicesPreview/ServicesPreview";
import { divAvantagesContent } from "@/ressources/content/home/divAvantagesContent";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SectionProcess process={divProcessContent} avantages={divAvantagesContent} />
      <ProjectPreview />
    </>
  )
}