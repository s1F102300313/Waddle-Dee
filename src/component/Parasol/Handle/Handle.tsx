import styles from './Handle.module.css';

const Handle = () => (
  <div className={styles.handleBorder}>
    <div className={styles.handleMiddle} />
    <div className={styles.handleEnd} />
    <div className={styles.handleBegin} />
  </div>
);

export default Handle;
