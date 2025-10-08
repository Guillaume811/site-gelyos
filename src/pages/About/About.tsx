import AboutSection from "./AboutSection/AboutSection";
import { aboutPageContent } from "@/ressources/content/about";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function About() {
  const { header, sections } = aboutPageContent;

  return (
    <>
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
