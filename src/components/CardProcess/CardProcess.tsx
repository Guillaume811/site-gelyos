import styles from './CardProcess.module.scss';
import Heading from '../Heading/Heading';

export type CardProcessProps = {
  card: {
    id: string;
    icon: { src: string; alt: string };
    title: string;
    description: string;
  };
  className?: string;
};

export function CardProcess({ card, className }: CardProcessProps) {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  return (
    <article className={containerClass} data-card-id={card.id}>
      <div className={styles.icon}>
        <img src={card.icon.src} alt={card.icon.alt} loading="lazy" />
      </div>
      <div className={styles.content}>
        <Heading level={3} className={styles.title}>{card.title}</Heading>
        <p className={styles.description}>{card.description}</p>
      </div>
    </article>
  );
}
