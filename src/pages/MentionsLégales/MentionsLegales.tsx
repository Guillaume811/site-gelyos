import HeaderSection from "@/components/HeaderSection/HeaderSection";
import styles from './MentionsLegales.module.scss'
import { mentionContent } from "@/ressources/content/mention/mentionContent";
import Heading from "@/components/Heading/Heading";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function MentionsLegales() {
  const { header, editeur, hebergement, conception, intellectuelle, responsabilite, cookies, confidentialite, loi, } = mentionContent;
  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <div className={styles.container}>

        <div className={styles.paragraphe}>
          <Heading level={2}>{editeur.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {editeur.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{hebergement.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {hebergement.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{conception.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {conception.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{intellectuelle.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {intellectuelle.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{responsabilite.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {responsabilite.description}
            </ReactMarkdown>
          </div>
        </div>

        <div id="confidential" className={styles.paragraphe}>
          <Heading level={2}>{cookies.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {cookies.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{confidentialite.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {confidentialite.description}
            </ReactMarkdown>
          </div>
        </div>

        <div className={styles.paragraphe}>
          <Heading level={2}>{loi.title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {loi.description}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </>
  )
}