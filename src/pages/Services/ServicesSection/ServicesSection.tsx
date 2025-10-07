import ReactMarkdown from "react-markdown";
import TwoColumnSection from "@/components/TwoColumnSection/TwoColumnSection";
import Heading from "@/components/Heading/Heading";
import Accordion from "@/components/Accordion/Accordion";
import styles from "./ServicesSection.module.scss";
import type { ServiceSectionContent } from "@/ressources/content/contentTypes";

interface Props extends ServiceSectionContent {
  reverse?: boolean;
  className?: string;
}

export default function ServicesSection({
  title,
  text,
  image,
  accordionItems,
  reverse = false,
  className,
}: Props) {
  return (
    <TwoColumnSection
  reverse={reverse}
  className={className}
  left={
    <div className={styles.left}>
      <Heading level={2}>{title}</Heading>
      <div className={styles.text}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <Accordion items={accordionItems} />
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
