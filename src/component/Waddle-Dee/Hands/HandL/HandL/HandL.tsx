import type { HandProps } from '../../../../../types/type';
import HandLShadow from '../HandLShadow/HandLShadow';
import styles from './HandL.module.css';

const HandL = ({ isShakeHand }: HandProps) => (
  <div>
    <div className={isShakeHand ? styles.shakeHandLAnimation : styles.handL} />
    <HandLShadow isShakeHand={isShakeHand} />
  </div>
);

export default HandL;
