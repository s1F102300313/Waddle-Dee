import Handle from '../component/Parasol/Handle/Handle';
import Parasol from '../component/Parasol/Parasol/Parasol';
import EyeL from '../component/Waddle-Dee/Eyes/EyeL/EyeL';
import EyeR from '../component/Waddle-Dee/Eyes/EyeR/EyeR';
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
        <Handle />
        <div className={styles.shaft} />
        <div className={styles.star} />
        <div className={styles.starBorder} />
        <Parasol />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <EyeL />
        <EyeR />
      </div>
    </div>
  );
};

export default Home;
