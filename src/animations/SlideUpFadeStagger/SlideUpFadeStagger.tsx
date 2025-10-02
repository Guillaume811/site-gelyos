import { motion, type Variants } from "framer-motion"
import { Children } from "react"
import clsx from "clsx"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  /** Démarrage différé (secondes) */
  delay?: number
  /** Décalage entre enfants (secondes) */
  stagger?: number
  /** Durée de l’anim (secondes) */
  duration?: number
  /** Courbe d’animation */
  ease?: "easeIn" | "easeOut" | "easeInOut"
}

/** Animation : slide-up + fade-in avec stagger */
export function SlideUpFadeStagger({
  children,
  className,
  delay = 0,
  stagger = 0.12,
  duration = 0.5,
  ease = "easeOut",
}: Props) {
  // 👇 container utilise custom = delay
  const container: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease,
        duration,
        staggerChildren: stagger,
        delay: customDelay, // délai pris en compte ici
      },
    }),
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease, duration: duration * 0.9 },
    },
  }

  const items = Children.toArray(children)

  return (
    <motion.div
      className={clsx(className)}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay} // 👈 injecte le délai au variant visible
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
