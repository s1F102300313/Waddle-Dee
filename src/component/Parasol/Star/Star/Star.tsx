import styles from './Star.module.css';

export const Star = () => (
  <div className={styles.starBase}>
    <div className={styles.starBorder}>
      <div className={styles.star} />
    </div>
  </div>
);
