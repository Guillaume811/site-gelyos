// src/pages/Contact/Contact.tsx
import type { ReactElement } from "react";
import { Seo } from "@/components/Seo/Seo";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import PageIntro from "@/components/PageIntro/PageIntro";
import TwoColumnSection from "@/components/TwoColumnSection/TwoColumnSection";
import { contactContent } from "@/ressources/content/contact/contactContent";

// Ces deux composants seront créés dans src/pages/Contact/ContactInfo/ et ContactForm/
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact(): ReactElement {
  const { header, intro, textForm } = contactContent;

  return (
    <>
      <Seo
        title="Contact GELYOS | Discutons de votre projet web"
        description="Parlez-nous de votre projet de site vitrine, e-commerce ou application web. Réponse rapide et accompagnement personnalisé."
        path="/contact"
        ogImage="/android-chrome-512x512.png"
      />
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />

      <TwoColumnSection
        left={<ContactInfo />}
        right={<ContactForm textUnderForm={textForm} />}
      />
    </>
  );
}

