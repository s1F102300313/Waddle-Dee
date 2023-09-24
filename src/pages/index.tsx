import Handle from '../component/Parasol/Handle/Handle/Handle';
import Parasol from '../component/Parasol/Parasol/Parasol';
import { Star } from '../component/Parasol/Star/Star/Star';
import Body from '../component/Waddle-Dee/Body/Body/Body';
import EyeL from '../component/Waddle-Dee/Eyes/EyeL/EyeL';
import EyeR from '../component/Waddle-Dee/Eyes/EyeR/EyeR';
import HandL from '../component/Waddle-Dee/Hands/HandL/HandL/HandL';
import LegL from '../component/Waddle-Dee/Legs/LegL/LegL/LegL';
import LegR from '../component/Waddle-Dee/Legs/LegR/LegR/LegR';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <Body />
        <LegL />
        <LegR />
        <div className={styles.face1} />
        <div className={styles.face2} />
        <HandL />
        <div className={styles.handR} />
        <Handle />
        <div className={styles.shaft} />
        <Star />
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
