import { motion, useTransform, type MotionValue } from "framer-motion";
import CardService from "@components/CardService/CardService";
import type { ServiceCard } from "@/ressources/content/contentTypes";
import styles from "./ServicesPreview.module.scss";

interface Props {
  index: number;
  activeIndex: MotionValue<number>;
  data: ServiceCard;
}

export default function ServicesPreviewItem({ index, activeIndex, data }: Props) {
  // mise en avant de la carte "centrée" (delta ~ 0)
  const opacity = useTransform(activeIndex, (v) => {
    const delta = Math.abs(v - index);
    // active ~1, voisines ~0.6 (tu ajusteras ensuite)
    return 1 - Math.min(delta, 1) * 0.4;
  });

  const scale = useTransform(activeIndex, (v) => {
    const delta = Math.abs(v - index);
    return 1 - Math.min(delta, 1) * 0.06; // 1 -> 0.94
  });

  return (
    <motion.div className={styles.cardWrapper} style={{ opacity, scale }}>
      <CardService data={data} />
    </motion.div>
  );
}
