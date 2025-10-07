import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import styles from "./AccordionItem.module.scss";
import clsx from "clsx";
import type { ServiceAccordionItem } from "@/ressources/content/contentTypes";

interface Props {
  item: ServiceAccordionItem;
  isOpen: boolean;
  onToggle: () => void;
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
              <ReactMarkdown>{item.description}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
