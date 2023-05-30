import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webImage, openModal, description }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles['ImageGalleryItem-image']}
        src={webImage}
        alt={description}
        onClick={openModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
