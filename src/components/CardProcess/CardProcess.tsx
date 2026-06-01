import styles from './CardProcess.module.scss';
import Heading from '../Heading/Heading';
import { getAssetSrc } from '@/lib/getAssetSrc';
import type { ProcessCard as ProcessCardContent } from '@/ressources/content/contentTypes';

export type CardProcessProps = {
  card: ProcessCardContent;
  className?: string;
  process?: boolean;
  showConnector?: boolean;
};

export function CardProcess({ card, className, process = false, showConnector = false }: CardProcessProps) {
  const baseClass = process ? `${styles.container} ${styles.process}` : styles.container;
  const containerClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <article className={containerClass} data-card-id={card.id}>
      <div className={styles.icon}>
        <img src={getAssetSrc(card.icon.src)} alt={card.icon.alt} loading="lazy" />
      </div>
      <div className={styles.content}>
        {process && card.number ? <p className={styles.number}>{card.number}</p> : null}
        <Heading level={3} className={styles.title}>{card.title}</Heading>
        <p className={styles.description}>{card.description}</p>
      </div>
      {process && showConnector ? <span className={styles.connector} aria-hidden="true" /> : null}
    </article>
  );
}
