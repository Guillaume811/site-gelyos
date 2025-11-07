// src/pages/Home/Hero/Hero.tsx
import Heading from '@/components/Heading/Heading'
import { PrimaryButtonLink, SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import styles from './Hero.module.scss'
import { heroContent } from '@/ressources/content/home/hero'
import { AnimatedTitle } from '@/animations/AnimatedTitle/AnimatedTitle'
import { TypewriterText } from '@/animations/TypewriterText/TypewriterText'
import { SlideUpFadeStagger } from '@/animations/SlideUpFadeStagger/SlideUpFadeStagger'

export default function Hero() {

  const { title, text, firstButton, secondButton, /* image */ } = heroContent

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Heading level={1} className={styles.title}>
          <AnimatedTitle text={title} />
        </Heading>

        <TypewriterText text={text} speed={8} startDelay={1500} className={styles.text} />

        <SlideUpFadeStagger className={styles.actions} delay={3} stagger={0.15} duration={1}>
          {firstButton && (
            <PrimaryButtonLink to={firstButton.to} className={styles.primaryBtn}>
              {firstButton.label}
            </PrimaryButtonLink>
          )}

          {secondButton && (
            <SecondaryButtonLink to={secondButton.to} className={styles.secondaryBtn}>
              {secondButton.label}
            </SecondaryButtonLink>
          )}
        </SlideUpFadeStagger>
      </div>

      {/* <div className={styles.right}>
        {image && (
          <img src={image.src} alt={image.alt} />
        )}
      </div> */}
    </section>
  )
}
