// src/pages/Home/Hero/Hero.tsx
import Heading from '@/components/Heading/Heading'
import { PrimaryButtonLink, SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import styles from './Hero.module.scss'
import { heroContent } from '@/ressources/content/home/hero'
import { AnimatedText } from '@/animations/AnimatedTitle/AnimatedTitle'
import { TypewriterText } from '@/animations/TypewriterText/TypewriterText'

export default function Hero() {

  const { title, text, firstButton, secondButton, image } = heroContent

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Heading level={1} className={styles.title}>
          <AnimatedText text={title} />
        </Heading>

        <TypewriterText text={text} speed={50} startDelay={3000} className={styles.text} />

        <div className={styles.actions}>
          {firstButton && (
            <PrimaryButtonLink to={firstButton.to}>
              {firstButton.label}
            </PrimaryButtonLink>
          )}

          {secondButton && (
            <SecondaryButtonLink to={secondButton.to}>
              {secondButton.label}
            </SecondaryButtonLink>
          )}
        </div>
      </div>

      <div className={styles.right}>
        {image && (
          <img src={image.src} alt={image.alt} />
        )}
      </div>
    </section>
  )
}
