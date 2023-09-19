import HandleShadow from '../HandleShadow/HandleShadow';
import styles from './Handle.module.css';

const Handle = () => (
  <div>
    <div className={styles.handleBorder}>
      <div className={styles.handleMiddle} />
      <div className={styles.handleEnd} />
      <div className={styles.handleBegin} />
    </div>
    <HandleShadow />
  </div>
);

export default Handle;
