import type { LegProps } from '../../../../../types/type';
import { LegLShadow } from '../LegLShadow/LegLShadow';
import styles from './LegL.module.css';

export const LegL = ({ isJump }: LegProps) => (
  <div className={isJump ? styles.jumpLAnimation : styles.legL}>
    <LegLShadow />
  </div>
);
