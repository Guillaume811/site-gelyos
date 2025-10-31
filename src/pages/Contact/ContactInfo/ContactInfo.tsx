import type { ReactElement } from "react";
import Heading from "@/components/Heading/Heading";
import { contactContent } from "@/ressources/content/contact/contactContent";
import styles from "./ContactInfo.module.scss";
import { Mail, Phone } from "lucide-react";
import linkedinIcon from '@/assets/icons/linkedin-contact.png'
import maltIcon from '@/assets/icons/malt.png'

type ContactInfoProps = {
  id?: string;
  linkedinUrl?: string;
  maltUrl?: string;
  emailAddress?: string;
  phoneNumber?: string;
};

export default function ContactInfo({
  id = "contact-info",
  linkedinUrl = "#",
  maltUrl = "#",
  emailAddress = "guillaumehuguet.gelios@gmail.com",
  phoneNumber = "+33677637864",
}: ContactInfoProps): ReactElement {
  const { title, email, phone, text } = contactContent;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={styles.container}>
      <Heading level={3} id={`${id}-title`} className={styles.title}>
        {title}
      </Heading>

      <div className={styles.infoList} role="group" aria-label="Moyens de contact">
        <div className={styles.infoItem} role="group" aria-labelledby={`${id}-email-title`} aria-describedby={`${id}-email-desc`}>
          <div className={styles.icon} aria-hidden="true">
            <Mail />
          </div>
          <div className={styles.text}>
            <Heading level={4} id={`${id}-email-title`} className={styles.infoTitle}>
              {email.title}
            </Heading>
            <p id={`${id}-email-desc`} className={styles.infoDesc}>
              {email.description}
            </p>
            <a
              href={`mailto:${emailAddress}`}
              className={styles.infoLink}
              aria-label={`Envoyer un e-mail à ${emailAddress}`}
            >
              Envoyer nous un E-mail
            </a>

          </div>
        </div>

        <div className={styles.infoItem} role="group" aria-labelledby={`${id}-phone-title`} aria-describedby={`${id}-phone-desc`}>
          <div className={styles.icon} aria-hidden="true">
            <Phone />
          </div>
          <div className={styles.text}>
            <Heading level={4} id={`${id}-phone-title`} className={styles.infoTitle}>
              {phone.title}
            </Heading>
            <p id={`${id}-phone-desc`} className={styles.infoDesc}>
              {phone.description}
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className={styles.infoLink}
              aria-label={`Appeler le ${phoneNumber}`}
            >
              Appelez-nous
            </a>
          </div>
        </div>
      </div>

      <p className={styles.paragraph}>{text}</p>

      <div className={styles.socialRow} role="group" aria-label="Réseaux">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Visiter mon profil LinkedIn (nouvel onglet)"
        >
          <img src={linkedinIcon} alt="" />
        </a>

        <a
          href={maltUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Visiter mon profil Malt (nouvel onglet)"
        >
          <img src={maltIcon} alt="" />
        </a>
      </div>
    </section>
  );
}
