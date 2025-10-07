import ReactMarkdown from "react-markdown";
import styles from "./PageIntro.module.scss";

interface Props {
  text: string;
}

export default function PageIntro({ text }: Props) {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
