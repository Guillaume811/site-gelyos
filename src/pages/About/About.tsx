import Heading from "@/components/Heading/Heading";
import AboutSection from "./AboutSection/AboutSection";
import { aboutPageContent } from "@/ressources/content/about";

export default function About() {
  const { title, sections } = aboutPageContent;

  return (
    <>
      <Heading level={1}>{title}</Heading>

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
