import type { HandProps } from '../../../../../types/type';
import HandLShadow from '../HandLShadow/HandLShadow';
import styles from './HandL.module.css';

export const HandL = ({ isShakeHand, isJump }: HandProps) => (
  <div
    className={
      isShakeHand ? styles.shakeHandLAnimation : isJump ? styles.jumpHandLAnimation : styles.handL
    }
  >
    <HandLShadow isShakeHand={isShakeHand} isJump={isJump} />
  </div>
);
