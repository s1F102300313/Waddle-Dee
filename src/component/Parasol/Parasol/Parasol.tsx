import type { ParasolProps } from '../../../types/type';
import styles from './Parasol.module.css';

const Parasol = ({ isParasolMove }: ParasolProps) => (
  <div>
    <div className={isParasolMove ? styles.redParasolAnimation : styles.redParasol} />
    <div className={isParasolMove ? styles.whiteParasolAnimation : styles.whiteParasol} />
    <div className={isParasolMove ? styles.redParasol1Animation : styles.redParasol1} />
    <div className={isParasolMove ? styles.redParasol2Animation : styles.redParasol2} />
    <div className={isParasolMove ? styles.whiteParasol1Animation : styles.whiteParasol1} />
    <div className={isParasolMove ? styles.whiteParasol2Animation : styles.whiteParasol2} />
  </div>
);
export default Parasol;
