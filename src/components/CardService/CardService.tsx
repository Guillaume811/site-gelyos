import styles from "./CardService.module.scss";
import Heading from "@/components/Heading/Heading";
import { SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import type { ServiceCard } from "@/ressources/content/contentTypes";
import ReactMarkdown from "react-markdown";

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

      <div className={styles.text}>
        <ReactMarkdown>
          {description}
        </ReactMarkdown>
      </div>
      

      <SecondaryButtonLink 
        to={secondButton.to} 
        aria-label={`${secondButton.label} — ${title}`}
        className={styles.button}
      >
        {secondButton.label}
      </SecondaryButtonLink>

    </div>
  );
}