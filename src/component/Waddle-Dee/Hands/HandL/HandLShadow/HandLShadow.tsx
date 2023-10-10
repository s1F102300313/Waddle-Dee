import type { HandProps } from '../../../../../types/type';
import styles from './HandLShadow.module.css';

const HandLShadow = ({ isShakeHand }: HandProps) => (
  <div className={isShakeHand ? styles.shakeHandLShadowAnimation : styles.handLShadow} />
);

export default HandLShadow;
