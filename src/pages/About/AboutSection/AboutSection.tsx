import ReactMarkdown from "react-markdown";
import TwoColumnSection from "@/components/TwoColumnSection/TwoColumnSection";
import Heading from "@/components/Heading/Heading";
import styles from "./AboutSection.module.scss";
import type { AboutSectionContent } from "@/ressources/content/contentTypes";

interface Props extends AboutSectionContent {
  reverse?: boolean;
  className?: string;
}

export default function AboutSection({
  title,
  description,
  image,
  reverse = false,
  className,
}: Props) {

console.log("image src:", image?.src, "title:", title);

  return (
    <TwoColumnSection
      reverse={reverse}
      className={className}
      left={
        <div className={styles.left}>
          <Heading level={2}>{title}</Heading>
          <div className={styles.text}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      }
      right={
        <div className={styles.right}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      }
    />
  );
}
