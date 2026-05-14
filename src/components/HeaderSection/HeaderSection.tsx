import { useEffect, useId, useRef } from "react"
import clsx from "clsx"
import Heading from "~/components/Heading/Heading"
import { getAssetSrc } from "~/lib/getAssetSrc"
import styles from "./HeaderSection.module.scss"
import type { ImageContent } from "~/ressources/content/contentTypes"

interface Props {
  title: string
  image: ImageContent
  className?: string
}

export default function HeaderSection({ title, image, className }: Props) {
  const titleId = useId()
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = backgroundRef.current
    if (!el) return

    let frame = 0

    const updateOffset = () => {
      frame = 0

      const isDesktop = window.innerWidth > 992
      if (!isDesktop) {
        el.style.setProperty("--parallax-offset", "0px")
        return
      }

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height || 1)
      const offset = (progress - 0.5) * 80
      el.style.setProperty("--parallax-offset", `${offset}px`)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateOffset)
    }

    updateOffset()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateOffset)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateOffset)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className={clsx(styles.section, className)} aria-labelledby={titleId}>
      <div ref={backgroundRef} className={styles.background} aria-hidden="true">
        <img src={getAssetSrc(image.src)} alt="" className={styles.backgroundImage} loading="eager" />
      </div>

      <div className={styles.content}>
        <div className={styles.titleBox}>
          <Heading id={titleId} level={1}>
            {title}
          </Heading>
        </div>
      </div>
    </section>
  )
}
