import BodyShadow from '../BodyShadow/BodyShadow';
import styles from './Body.module.css';

const Body = () => (
  <div>
    <div className={styles.body} />
    <BodyShadow />
  </div>
);

export default Body;
