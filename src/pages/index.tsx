import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.body} />
        <div className={styles.legL} />
        <div className={styles.legR} />
        <div className={styles.face1} />
        <div className={styles.face2} />
        <div className={styles.handL} />
        <div className={styles.handR} />
        <div className={styles.handleBorder}>
          <div className={styles.handleMiddle} />
          <div className={styles.handleEnd} />
          <div className={styles.handleBegin} />
        </div>
        <div className={styles.shaft} />
        <div className={styles.star} />
        <div className={styles.starBorder} />
        <div className={styles.redParasol} />
        <div className={styles.whiteParasol} />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <EyeL />
        <div className={styles.eyeRBase}>
          <div className={styles.eyeLineR} />
          <div className={styles.eyeLight1R} />
          <div className={styles.eyeBackR} />
          <div className={styles.eyeLight2R} />
        </div>
      </div>
    </div>
  );
};

const EyeL = () => (
  <div className={styles.eyeLBase}>
    <div className={styles.eyeLineL} />
    <div className={styles.eyeLight1L} />
    <div className={styles.eyeBackL} />
    <div className={styles.eyeLight2L} />
  </div>
);

export default Home;
