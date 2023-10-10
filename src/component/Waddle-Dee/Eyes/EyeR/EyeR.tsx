import type { EyeProps } from '../../../../types/type';
import styles from './EyeR.module.css';

export const EyeR = ({ isWink }: EyeProps) => (
  <div className={styles.eyeRBase}>
    <div className={isWink ? styles.eyeRWrapAnimation : styles.eyeRWrap}>
      <div className={styles.eyeLineR} />
      <div className={styles.eyeLight1R} />
      <div className={styles.eyeBackR} />
      <div className={styles.eyeLight2R} />
    </div>
  </div>
);
