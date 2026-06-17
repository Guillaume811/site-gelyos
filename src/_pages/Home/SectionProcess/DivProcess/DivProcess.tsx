import styles from './DivProcess.module.scss';
import type { DivProcess as DivProcessContent, ProcessCard as ProcessCardContent } from '@/ressources/content/contentTypes';
import { CardProcess } from '@/components/CardProcess/CardProcess';
import Heading from '@/components/Heading/Heading';

export type DivProcessProps = {
  data: DivProcessContent;
  className?: string;
};

export function DivProcess({ data, className }: DivProcessProps) {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={containerClass}>
        <div className={styles.headingBlock}>
          <Heading level={3} className={styles.subtitle}>{data.subtitle}</Heading>
          <Heading level={2} className={styles.title}>{data.title}</Heading>
          <div className={styles.separator} aria-hidden="true" />
          <p className={styles.description}>{data.description}</p>
        </div>
        <ul className={styles.list} role="list">
            {data.cards.map((card: ProcessCardContent, index) => (
            <li key={card.id} className={styles.item}>
                <CardProcess
                  card={card}
                  className={styles.processCard}
                  process
                  showConnector={index < data.cards.length - 1}
                />
            </li>
            ))}
        </ul>
    </div>
  );
}
