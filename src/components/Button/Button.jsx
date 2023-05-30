import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ onClick }) {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
