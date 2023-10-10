import type { LegProps } from '../../../../../types/type';
import { LegRShadow } from '../LegRShadow/LegRShadow';
import styles from './LegR.module.css';

export const LegR = ({ isJump }: LegProps) => (
  <div className={isJump ? styles.jumpRAnimation : styles.legR}>
    <LegRShadow />
  </div>
);
