import Heading from "@/components/Heading/Heading";
import PageIntro from "@/components/PageIntro/PageIntro";
import ServicesSection from "./ServicesSection/ServicesSection";
import { servicesPageContent } from "@/ressources/content/services";

export default function Services() {
  const { title, text, services } = servicesPageContent;

  return (
    <>
      <Heading level={1}>{title}</Heading>
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
