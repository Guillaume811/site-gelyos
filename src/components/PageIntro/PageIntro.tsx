import type { InlineContent } from "~/ressources/content/contentTypes";
import styles from "./PageIntro.module.scss";

interface Props {
  text: InlineContent;
}

function renderInlineContent(content: InlineContent) {
  return (
    <p>
      {content.map((segment, index) => {
        switch (segment.type) {
          case "text":
            return <span key={`text-${index}`}>{segment.text}</span>;
          case "strong":
            return <strong key={`strong-${index}`}>{segment.text}</strong>;
          case "emphasis":
            return <em key={`emphasis-${index}`}>{segment.text}</em>;
          case "accent":
            return (
              <span key={`accent-${index}`} data-inline="accent">
                {segment.text}
              </span>
            );
          case "link":
            return (
              <a key={`link-${index}`} href={segment.href}>
                {segment.text}
              </a>
            );
          case "lineBreak":
            return <br key={`line-break-${index}`} />;
          default:
            return null;
        }
      })}
    </p>
  );
}

export default function PageIntro({ text }: Props) {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>{renderInlineContent(text)}</div>
    </div>
  );
}
