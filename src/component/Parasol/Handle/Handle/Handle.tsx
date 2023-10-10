import type { ParasolProps } from '../../../../types/type';
import styles from './Handle.module.css';

export const Handle = ({ isParasolMove }: ParasolProps) => (
  <div className={styles.handleBase}>
    <div className={isParasolMove ? styles.handleBoxAnimation : styles.handleBox}>
      <div className={isParasolMove ? styles.handleBorderAnimation : styles.handleBorder} />
      <div className={isParasolMove ? styles.handleMiddleAnimation : styles.handleMiddle} />
      <div className={isParasolMove ? styles.handleEndAnimation : styles.handleEnd} />
    </div>
    {/* <HandleShadow /> */}
    <div className={styles.handleBegin} />
  </div>
);
