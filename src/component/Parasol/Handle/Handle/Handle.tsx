import styles from './Handle.module.css';

const Handle = () => (
  <div className={styles.handleBase}>
    <div className={styles.handleBox}>
      <div className={styles.handleBorder} />
      <div className={styles.handleMiddle} />
      <div className={styles.handleEnd} />
    </div>
    {/* <HandleShadow /> */}
    <div className={styles.handleBegin} />
  </div>
);

export default Handle;
