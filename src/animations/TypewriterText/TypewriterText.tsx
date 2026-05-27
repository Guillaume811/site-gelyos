import { useEffect, useMemo, useState } from "react"
import clsx from "clsx"
import styles from "./Typewriter.module.scss"

type Props = {
  text: string              // texte brut à animer
  speed?: number            // ms par caractère (ex: 30)
  startDelay?: number       // ms avant de commencer (optionnel)
  className?: string
}

type DecoratedChar = {
  char: string
  highlight: boolean
}

type Chunk = {
  text: string
  highlight: boolean
}

const TOKEN_START = "[["
const TOKEN_END = "]]"

function expandChars(text: string): DecoratedChar[] {
  const chars: DecoratedChar[] = []
  let idx = 0

  while (idx < text.length) {
    if (text.startsWith(TOKEN_START, idx)) {
      const closing = text.indexOf(TOKEN_END, idx + TOKEN_START.length)
      if (closing !== -1) {
        const segment = text.slice(idx + TOKEN_START.length, closing)
        for (const ch of segment) {
          chars.push({ char: ch, highlight: true })
        }
        idx = closing + TOKEN_END.length
        continue
      }
    }

    chars.push({ char: text[idx], highlight: false })
    idx += 1
  }

  return chars
}

function compressChunks(chars: DecoratedChar[]): Chunk[] {
  if (!chars.length) return []
  const chunks: Chunk[] = [{ text: chars[0].char, highlight: chars[0].highlight }]

  for (let i = 1; i < chars.length; i += 1) {
    const current = chars[i]
    const last = chunks[chunks.length - 1]
    if (last.highlight === current.highlight) {
      last.text += current.char
    } else {
      chunks.push({ text: current.char, highlight: current.highlight })
    }
  }

  return chunks
}

export function TypewriterText({ text, speed = 30, startDelay = 0, className }: Props) {
  const charSequence = useMemo(() => expandChars(text), [text])
  const [i, setI] = useState(0)

  useEffect(() => {
    setI(0)
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        setI(prev => {
          if (prev >= charSequence.length) { window.clearInterval(id); return prev }
          return prev + 1
        })
      }, speed)
    }, startDelay)
    return () => window.clearTimeout(start)
  }, [charSequence.length, speed, startDelay])

  const visibleChunks = useMemo(() => {
    const slice = charSequence.slice(0, i)
    return compressChunks(slice)
  }, [charSequence, i])

  return (
    <p className={clsx(styles.typewriter, className)} aria-live="polite">
      {visibleChunks.map((chunk, idx) =>
        chunk.highlight ? (
          <span key={`h-${idx}`} className={styles.highlight}>
            {chunk.text}
          </span>
        ) : (
          <span key={`n-${idx}`}>{chunk.text}</span>
        ),
      )}
      <span className={styles.cursor}>|</span>
    </p>
  )
}
