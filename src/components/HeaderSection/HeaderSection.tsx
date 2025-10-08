import { useId } from "react";
import clsx from "clsx";
import Heading from "@/components/Heading/Heading";
import styles from "./HeaderSection.module.scss";
import type { ImageContent } from "@/ressources/content/contentTypes";

interface Props {
  title: string;
  image: ImageContent;
  className?: string;
}

export default function HeaderSection({ title, image, className }: Props) {
  const titleId = useId();

  return (
    <section
      className={clsx(styles.section, className)}
      aria-labelledby={titleId}
    >
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${image.src})` }}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <div className={styles.titleBox}>
          <Heading id={titleId} level={1}>
            {title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
