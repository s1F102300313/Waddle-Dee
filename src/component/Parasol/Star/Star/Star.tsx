import type { ParasolProps } from '../../../../types/type';
import { StarShadow } from '../StarShadow/StarShadow';
import styles from './Star.module.css';

export const Star = ({ isParasolMove }: ParasolProps) => (
  <div className={styles.starBase}>
    <div className={isParasolMove ? styles.starBorderAnimation : styles.starBorder}>
      <div className={isParasolMove ? styles.starAnimation : styles.star}>
        <StarShadow isParasolMove={isParasolMove} />
      </div>
    </div>
  </div>
);
