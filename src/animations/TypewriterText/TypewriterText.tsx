import { useEffect, useState } from "react"
import clsx from "clsx"
import styles from "./Typewriter.module.scss"

type Props = {
  text: string              // texte brut à animer
  speed?: number            // ms par caractère (ex: 30)
  startDelay?: number       // ms avant de commencer (optionnel)
  className?: string
}

export function TypewriterText({ text, speed = 30, startDelay = 0, className }: Props) {
  const [i, setI] = useState(0)

  useEffect(() => {
    setI(0)
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        setI(prev => {
          if (prev >= text.length) { window.clearInterval(id); return prev }
          return prev + 1
        })
      }, speed)
    }, startDelay)
    return () => window.clearTimeout(start)
  }, [text, speed, startDelay])

  const partial = text.slice(0, i)

  return (
    <p className={clsx(styles.typewriter, className)} aria-live="polite">
      {partial}
      <span className={styles.cursor}>|</span>
    </p>
  )
}
