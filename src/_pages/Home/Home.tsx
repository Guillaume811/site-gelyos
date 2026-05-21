/* Component Home
 * Render logic:
 * - Composes the existing homepage sections without changing legacy UI behavior.
 * - Keeps client runtime because child sections rely on hooks/animations.
 *
 * View TSX:
 * - Renders Hero, ServicesPreview, SectionProcess and ProjectPreview in the same order.
 */
'use client'

import { divProcessContent } from "@/ressources/content/home/divProcessContent";
import Hero from "./Hero/Hero";
import { SectionProcess } from "./SectionProcess/SectionProcess";
import ServicesPreview from "./ServicesPreview/ServicesPreview";
import { divAvantagesContent } from "@/ressources/content/home/divAvantagesContent";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <ServicesPreview />
      <SectionProcess process={divProcessContent} avantages={divAvantagesContent} />
      <ProjectPreview />
    </div>
  )
}
