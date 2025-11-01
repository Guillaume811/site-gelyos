import { PrimaryButtonLink } from '@/components/Buttons/ButtonLink'
import Heading from '@/components/Heading/Heading'
import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <section className={styles.container}>
      <Heading id={"404"} level={1}>
        {"Erreur 404"}
      </Heading>

      <p>
        Oups… cette page n’existe pas.
      </p>

      <PrimaryButtonLink to="/contact">
          Revenir en lieux sûrs
      </PrimaryButtonLink>
    </section>
  )
}