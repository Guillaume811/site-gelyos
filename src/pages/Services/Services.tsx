import PageIntro from "@/components/PageIntro/PageIntro";
import ServicesSection from "./ServicesSection/ServicesSection";
import { servicesPageContent } from "@/ressources/content/services";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function Services() {
  const { header, text, services } = servicesPageContent;

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={text} />

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
