import { useState } from "react";
import styles from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem/AccordionItem";
import type { AccordionItemContent } from "@/ressources/content/contentTypes";

interface AccordionProps {
  items: AccordionItemContent[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      allowMultiple
        ? prev.includes(id)
          ? prev.filter((x) => x !== id)
          : [...prev, id]
        : prev[0] === id
        ? []
        : [id]
    );
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
