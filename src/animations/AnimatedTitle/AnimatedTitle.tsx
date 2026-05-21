import { Fragment, type ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./AnimatedTitle.module.scss"
import type { InlineContent } from "@/ressources/content/contentTypes"

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

function renderInlineContent(content: InlineContent): ReactNode {
  return content.map((segment, index) => {
    switch (segment.type) {
      case "text":
        return <Fragment key={`text-${index}`}>{renderChars(segment.text)}</Fragment>
      case "strong":
        return <strong key={`strong-${index}`}>{renderChars(segment.text)}</strong>
      case "emphasis":
        return <em key={`emphasis-${index}`}>{renderChars(segment.text)}</em>
      case "accent":
        return (
          <span key={`accent-${index}`} data-inline="accent">
            {renderChars(segment.text)}
          </span>
        )
      case "link":
        return (
          <a key={`link-${index}`} href={segment.href}>
            {renderChars(segment.text)}
          </a>
        )
      case "lineBreak":
        return <br key={`line-break-${index}`} />
      default:
        return null
    }
  })
}

export function AnimatedTitle({ text }: { text: InlineContent }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={styles.animatedText}
    >
      {renderInlineContent(text)}
    </motion.span>
  )
}
