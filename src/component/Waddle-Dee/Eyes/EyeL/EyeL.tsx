import type { EyeProps } from '../../../../types/type';
import styles from './EyeL.module.css';

const EyeL = ({ isWink }: EyeProps) => (
  <div className={styles.eyeLBase}>
    <div className={isWink ? styles.eyeWrapAnimation : styles.eyeWrap}>
      <div className={styles.eyeLineL} />
      <div className={styles.eyeLight1L} />
      <div className={styles.eyeBackL} />
      <div className={styles.eyeLight2L} />
    </div>
  </div>
);

export default EyeL;
