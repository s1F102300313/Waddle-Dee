import styles from './Parasol.module.css';

const Parasol = () => (
  <div>
    <div className={styles.redParasol} />
    <div className={styles.whiteParasol} />
    <div className={styles.parasolView}>
      <div className={styles.redParasol1} />
      <div className={styles.redParasol2} />
      <div className={styles.whiteParasol1} />
      <div className={styles.whiteParasol2} />
    </div>
  </div>
);
export default Parasol;
