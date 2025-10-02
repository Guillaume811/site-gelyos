// src/pages/Home/Hero/Hero.tsx
import Heading from '@/components/Heading/Heading'
import { PrimaryButtonLink, SecondaryButtonLink } from '@/components/Buttons/ButtonLink'
import styles from './Hero.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { heroContent } from '@/ressources/content/home/hero'

export default function Hero() {

  const { title, text, firstButton, secondButton, image } = heroContent

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Heading level={1} className={styles.title}>
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {title}
          </ReactMarkdown>
        </Heading>

        <p className={styles.text}>
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
        </p>

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
