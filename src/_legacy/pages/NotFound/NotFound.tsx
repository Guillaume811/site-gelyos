import { PrimaryButtonLink } from '~/components/Buttons/ButtonLink'
import Heading from '~/components/Heading/Heading'
import { Seo } from '~/components/Seo/Seo'
import styles from './NotFound.module.scss'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Erreur 404 | Page non trouvée"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        robots="noindex, nofollow"
      />
      <section className={styles.container}>
        <Heading id="404" level={1}>
          Erreur 404
        </Heading>

        <p>
          Oups... cette page n'existe pas.
        </p>

        <PrimaryButtonLink to="/contact">
          Revenir en lieux sûrs
        </PrimaryButtonLink>
      </section>
    </>
  )
}
