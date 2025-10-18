import PageIntro from "@/components/PageIntro/PageIntro";
import ServicesSection from "./ServicesSection/ServicesSection";
import { servicesPageContent } from "@/ressources/content/services";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function Services() {
  const { header, intro, services } = servicesPageContent;

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />

      {services.map((service, index) => (
        <ServicesSection
          key={service.id}
          {...service}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
}
