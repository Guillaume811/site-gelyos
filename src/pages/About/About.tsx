import { Seo } from "~/components/Seo/Seo";
import AboutSection from "./AboutSection/AboutSection";
import { aboutPageContent } from "~/ressources/content/about";
import HeaderSection from "~/components/HeaderSection/HeaderSection";

export default function About() {
  const { header, sections } = aboutPageContent;

  return (
    <>
      <Seo
        title="À propos de GELYOS | Studio de développement web"
        description="Découvrez GELYOS, notre approche projet et notre méthode pour concevoir des expériences web performantes et orientées conversion."
        path="/a-propos"
        ogImage="/android-chrome-512x512.png"
      />
      <HeaderSection title={header.title} image={header.image} />

      {sections.map((section, index) => (
        <AboutSection
          key={section.id}
          {...section}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
}
