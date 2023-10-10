import BodyShadow from '../BodyShadow/BodyShadow';
import styles from './Body.module.css';

export const Body = () => (
  <div>
    <div className={styles.body} />
    <BodyShadow />
  </div>
);
