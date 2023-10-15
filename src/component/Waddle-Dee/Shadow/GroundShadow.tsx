import type { GroundProps } from '../../../types/type';
import styles from './GroundShadow.module.css';

export const GroundShadow = ({ isJump }: GroundProps) => (
  <div className={isJump ? styles.jumpGroundShadowAnimation : styles.groundShadow} />
);
