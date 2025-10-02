import { Fragment, type ReactNode } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import styles from "./AnimatedTitle.module.scss"

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
} as const

const charVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 90, scale: 0.8 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

function renderChars(text: string) {
  return text.split("").map((c, i) => (
    <motion.span key={i} variants={charVariant} className={styles.char}>
      {c === " " ? "\u00A0" : c}
    </motion.span>
  ))
}

// Sécurise et split récursivement le contenu
function splitAny(node?: ReactNode): ReactNode {
  if (node == null) return null
  if (typeof node === "string" || typeof node === "number") {
    return renderChars(String(node))
  }
  if (Array.isArray(node)) {
    return node.map((n, i) => <Fragment key={i}>{splitAny(n)}</Fragment>)
  }
  // Autres éléments (ex: déjà <strong> ou <em>) seront gérés par 'components'
  return node
}

export function AnimatedText({ text }: { text: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={styles.animatedText}
    >
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          // Évite d’insérer <p> dans un <h1> / <h2> : on rend juste le contenu splitté
          p: ({ children }: { children?: ReactNode }) => <>{splitAny(children)}</>,
          strong: ({ children }: { children?: ReactNode }) => <strong>{splitAny(children)}</strong>,
          em: ({ children }: { children?: ReactNode }) => <em>{splitAny(children)}</em>,
          a: ({ href, children }: { href?: string; children?: ReactNode }) => (
            <a href={href}>{splitAny(children)}</a>
          ),
          br: () => <br />
        }}
      >
        {text}
      </ReactMarkdown>
    </motion.span>
  )
}
