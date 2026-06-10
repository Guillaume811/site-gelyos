import Heading from '@/components/Heading/Heading'
import styles from './ServiceDetail.module.scss'

interface Props {
  serviceName: string
}

/* Component ServiceDetail
 * Render logic:
 * - Receives the service name selected by the dynamic route.
 * - Keeps a minimal shared page while detailed service content is prepared.
 *
 * View TSX:
 * - Renders one semantic page heading identifying the current service.
 */
export default function ServiceDetail({ serviceName }: Props) {
  return (
    <section className={styles.section}>
      <Heading level={1}>Je suis sur le service {serviceName}</Heading>
    </section>
  )
}
