import styles from './SectionProcess.module.scss';
import type { DivProcess as DivProcessContent, DivAvantages as DivAvantagesContent } from '@/ressources/content/contentTypes';
import { DivProcess } from './DivProcess/DivProcess';
import { DivAvantages } from './DivAvantages/DivAvantages';

export type SectionProcessProps = {
  process: DivProcessContent;
  avantages: DivAvantagesContent;
  id?: string;
  className?: string;
};

export function SectionProcess({ process, avantages, id, className }: SectionProcessProps) {
  const containerClass = className ? `${styles.container} ${className}` : styles.container;

  return (
    <section id={id} className={containerClass} aria-label="Processus et avantages">
      <DivProcess data={process} className={styles.process} />
      <DivAvantages data={avantages} className={styles.avantages} />
    </section>
  );
}
