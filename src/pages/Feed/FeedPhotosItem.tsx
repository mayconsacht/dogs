import { Post } from './types';
import styles from './FeedPhotosItem.module.css';

function FeedPhotosItem({ src, title, acessos }: Post) {
  function handleClick() {}

  return (
    <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
      <img src={src} alt={title}></img>
      <span className={styles.views}>{acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
