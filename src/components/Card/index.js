import { memo } from "react";
import styles from "./card.module.css";
function Card({ children, title }) {
  return (
    <div className={styles.card}>
      {title && (
        <div className={styles.card__header}>
          <h1 className={styles.card__title}>{title}</h1>
        </div>
      )}
      <div className={styles.card_content}>{children}</div>
    </div>
  );
}
export default memo(Card);
