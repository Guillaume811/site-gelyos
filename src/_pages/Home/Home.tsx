import Heading from '~/components/Heading/Heading'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <Heading id="home-title" level={1}>
          Developpement Web Sur Mesure
        </Heading>
        <p className={styles.text}>
          Base Next.js en place pour la migration progressive. Le routing React existant est
          conserve pendant cette etape.
        </p>
      </section>
    </main>
  )
}
