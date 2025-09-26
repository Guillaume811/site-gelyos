import Heading from '../Heading/Heading'
import styles from './CallToAction.module.scss'
import { PrimaryButtonLink } from '@/components/Buttons/ButtonLink'

export default function CallToAction() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
        <div className={styles.line} aria-hidden="true" />
        <div className={styles.container}>
        <Heading id="cta-title" level={2} className={styles.title}>
            Votre site est-il vraiment optimisé ?
        </Heading>
        <p className={styles.text}>
            Bénéficiez d’un audit gratuit de votre site internet pour identifier ses points forts et ses axes d’amélioration.
            Je vous fournis une analyse claire et des recommandations personnalisées pour booster votre visibilité en ligne.
        </p>
        <div className={styles.actions}>
            <PrimaryButtonLink to="/contact">
            Recevoir mon audit offert
            </PrimaryButtonLink>
        </div>
        </div>
    </section>
  )
}