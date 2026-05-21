import styles from './DivAvantages.module.scss';
import type { DivAvantages as DivAvantagesContent, ProcessCard as ProcessCardContent } from '@/ressources/content/contentTypes';
import { CardProcess } from '@/components/CardProcess/CardProcess';
import Heading from '@/components/Heading/Heading';

export type DivAvantagesProps = {
  data: DivAvantagesContent;
  className?: string;
};

export function DivAvantages({ data, className }: DivAvantagesProps) {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={containerClass}>
        <Heading level={2} className={styles.title}>{data.title}</Heading>
        <ul className={styles.grid} role="list">
            {data.cards.map((card: ProcessCardContent) => (
            <li key={card.id} className={styles.cell}>
                <CardProcess card={card} className={styles.avantageCard} />
            </li>
            ))}
        </ul>
    </div>
  );
}
