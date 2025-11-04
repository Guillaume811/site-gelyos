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
        <Heading level={2} className={styles.title}>{data.title}</Heading>
        <ul className={styles.list} role="list">
            {data.cards.map((card: ProcessCardContent) => (
            <li key={card.id} className={styles.item}>
                <CardProcess card={card} className={styles.processCard} />
            </li>
            ))}
        </ul>
    </div>
  );
}
