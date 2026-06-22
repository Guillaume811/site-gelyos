import Heading from '@/components/Heading/Heading'
import Link from 'next/link'
import buttonStyles from '@/components/Buttons/Button.module.scss'
import styles from './Hero.module.scss'
import { heroContent } from '@/ressources/content/home/hero'
import { AnimatedTitle } from '@/animations/AnimatedTitle/AnimatedTitle'
import { SlideUpFadeStagger } from '@/animations/SlideUpFadeStagger/SlideUpFadeStagger'

/* Function renderHeroText
 * Logic:
 * - Reads [[...]] markers from the hero text.
 * - Renders marked text with the existing highlight style.
 *
 * Output:
 * - Returns inline spans without showing marker characters.
 */
function renderHeroText(text: string) {
  return text.split(/(\[\[.*?\]\])/g).map((part, index) => {
    const isHighlighted = part.startsWith('[[') && part.endsWith(']]')
    const cleanText = isHighlighted ? part.slice(2, -2) : part

    return isHighlighted ? (
      <span key={index} className={styles.highlight}>
        {cleanText}
      </span>
    ) : (
      <span key={index}>{cleanText}</span>
    )
  })
}

export default function Hero() {

  const { title, text, firstButton, secondButton, /* image */ } = heroContent

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Heading level={1} className={styles.title}>
          <AnimatedTitle text={title} />
        </Heading>

        <SlideUpFadeStagger delay={1.8} stagger={0} duration={0.8}>
          <p className={styles.text}>{renderHeroText(text)}</p>
        </SlideUpFadeStagger>

        <SlideUpFadeStagger className={styles.actions} delay={2.2} stagger={0.15} duration={1}>
          {firstButton && (
            <Link href={firstButton.to as string} className={`${buttonStyles.btn} ${buttonStyles.primary} ${styles.primaryBtn}`}>
              {firstButton.label}
            </Link>
          )}

          {secondButton && (
            <Link href={secondButton.to as string} className={`${buttonStyles.btn} ${buttonStyles.secondary} ${styles.secondaryBtn}`}>
              {secondButton.label}
            </Link>
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
