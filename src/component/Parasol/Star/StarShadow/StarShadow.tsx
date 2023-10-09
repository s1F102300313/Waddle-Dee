import type { ParasolProps } from '../../../../types/type';
import styles from './StarShadow.module.css';

export const StarShadow = ({ isParasolMove }: ParasolProps) => (
  <div className={isParasolMove ? styles.starShadowAnimation : styles.starShadow} />
);
