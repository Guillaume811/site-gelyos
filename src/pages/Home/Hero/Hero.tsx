// src/pages/Home/Hero/Hero.tsx
import Heading from '@/components/Heading/Heading'
import { PrimaryButtonLink, SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import styles from './Hero.module.scss'
import heroImage from '@/assets/pictures/hero.png'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Heading level={1} className={styles.title}>
          Développement Web Sur Mesure
        </Heading>
        <p className={styles.text}>
          Je vous conçois des sites internet sur mesure avec un développement web personnalisé - site vitrine, e-commerce ou application web - pour servir vos objectifs, reflèter votre marque et convertir vos visiteurs en clients.
        </p>
        <div className={styles.actions}>
          <PrimaryButtonLink to="/contact">Parlons de votre projet</PrimaryButtonLink>
          <SecondaryButtonLink to="/services">Voir mes réalisations</SecondaryButtonLink>
        </div>
      </div>

      <div className={styles.right}>
        <img src={heroImage} alt="Illustration site moderne" />
      </div>
    </section>
  )
}
