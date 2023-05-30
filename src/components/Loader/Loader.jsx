import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.Loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={40}
        width={40}
        strokeWidth={5}
        color="#ffd166"
        secondaryColor="#ccc"
      />
    </div>
  );
}
