import Link from 'next/link'
import styles from './DivAvantages.module.scss';
import type { DivAvantages as DivAvantagesContent, ProcessCard as ProcessCardContent } from '@/ressources/content/contentTypes';
import { getAssetSrc } from '@/lib/getAssetSrc';
import Heading from '@/components/Heading/Heading';
import buttonStyles from '@/components/Buttons/Button.module.scss';

export type DivAvantagesProps = {
  data: DivAvantagesContent;
  className?: string;
};

export function DivAvantages({ data, className }: DivAvantagesProps) {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={containerClass}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Heading level={3} className={styles.subtitle}>
              {data.subtitle}
            </Heading>
            <Heading level={2} className={styles.title}>
              {data.title}
            </Heading>
            <p className={styles.description}>{data.description}</p>
          </div>

          <ul className={styles.grid} role="list">
            {data.cards.map((card: ProcessCardContent) => (
              <li key={card.id} className={styles.cell}>
                <article className={styles.card}>
                  <div className={styles.icon}>
                    <img src={getAssetSrc(card.icon.src)} alt={card.icon.alt} loading="lazy" />
                  </div>
                  <div className={styles.cardContent}>
                    <Heading level={3} className={styles.cardTitle}>
                      {card.title}
                    </Heading>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.buttonWrap}>
          <Link
            href={data.firstButton.to as string}
            className={`${buttonStyles.btn} ${buttonStyles.primary} ${styles.button}`}
          >
            {data.firstButton.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
