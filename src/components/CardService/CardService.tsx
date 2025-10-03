import styles from "./CardService.module.scss";
import Heading from "@/components/Heading/Heading";
import { SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import type { ServiceCard } from "@/ressources/content/contentTypes";

interface Props {
  data: ServiceCard;
  className?: string;
}

export default function CardService({ data, className }: Props) {
  const { icon, title, description, secondButton } = data;

  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          <img src={icon.src} alt={icon.alt} />
        </div>
      )}

      <Heading level={3} className={styles.title}>
        {title}
      </Heading>

      <p className={styles.text}>{description}</p>

      <div className={styles.actions}>
        <SecondaryButtonLink to={secondButton.to} aria-label={`${secondButton.label} — ${title}`}>
          {secondButton.label}
        </SecondaryButtonLink>
      </div>
    </div>
  );
}