import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./AccordionItem.module.scss";
import clsx from "clsx";
import type { AccordionItemContent, InlineContent } from "~/ressources/content/contentTypes";

interface Props {
  item: AccordionItemContent;
  isOpen: boolean;
  onToggle: () => void;
}

function splitIntoParagraphs(content: InlineContent): InlineContent[] {
  const paragraphs: InlineContent[] = [];
  let current: InlineContent = [];
  let consecutiveBreaks = 0;

  content.forEach((segment) => {
    if (segment.type === "lineBreak") {
      consecutiveBreaks += 1;

      if (consecutiveBreaks >= 2) {
        if (current.length > 0) {
          paragraphs.push(current);
          current = [];
        }
        consecutiveBreaks = 0;
      } else {
        current.push({ type: "lineBreak" });
      }

      return;
    }

    consecutiveBreaks = 0;
    current.push(segment);
  });

  if (current.length > 0) {
    paragraphs.push(current);
  }

  return paragraphs.length > 0 ? paragraphs : [content];
}

function renderInlineContent(content: InlineContent) {
  const paragraphs = splitIntoParagraphs(content);

  return paragraphs.map((paragraph, paragraphIndex) => (
    <p key={`paragraph-${paragraphIndex}`}>
      {paragraph.map((segment, segmentIndex) => {
        switch (segment.type) {
          case "text":
            return <span key={`text-${paragraphIndex}-${segmentIndex}`}>{segment.text}</span>;
          case "strong":
            return <strong key={`strong-${paragraphIndex}-${segmentIndex}`}>{segment.text}</strong>;
          case "emphasis":
            return <em key={`emphasis-${paragraphIndex}-${segmentIndex}`}>{segment.text}</em>;
          case "accent":
            return (
              <span key={`accent-${paragraphIndex}-${segmentIndex}`} data-inline="accent">
                {segment.text}
              </span>
            );
          case "link":
            return (
              <a key={`link-${paragraphIndex}-${segmentIndex}`} href={segment.href}>
                {segment.text}
              </a>
            );
          case "lineBreak":
            return <br key={`line-break-${paragraphIndex}-${segmentIndex}`} />;
          default:
            return null;
        }
      })}
    </p>
  ));
}

export default function AccordionItem({ item, isOpen, onToggle }: Props) {
  return (
    <div className={clsx(styles.item, isOpen && styles.open)}>
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${item.id}`}
        id={`accordion-control-${item.id}`}
      >
        <span className={styles.title}>{item.title}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`accordion-panel-${item.id}`}
            role="region"
            aria-labelledby={`accordion-control-${item.id}`}
            className={styles.content}
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className={styles.inner}>
              {renderInlineContent(item.description)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
