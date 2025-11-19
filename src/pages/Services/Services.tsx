import { Seo } from "@/components/Seo/Seo";
import PageIntro from "@/components/PageIntro/PageIntro";
import ServicesSection from "./ServicesSection/ServicesSection";
import { servicesPageContent } from "@/ressources/content/services";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function Services() {
  const { header, intro, services } = servicesPageContent;

  return (
    <>
      <Seo
        title="Services GELYOS | Développement, maintenance et SEO"
        description="Création de sites vitrines, e-commerce, applications web, maintenance et optimisation SEO pour faire croître votre activité."
        path="/services"
        ogImage="/android-chrome-512x512.png"
      />
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
