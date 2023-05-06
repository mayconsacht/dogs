import { Photo } from './types';
import styles from './FeedPhotosItem.module.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  post: Photo;
  setModalPhoto: Dispatch<SetStateAction<Photo | null>>;
}

export const FeedPhotosItem = ({ post, setModalPhoto }: Props) => {
  function handleClick() {
    setModalPhoto(post);
  }

  return (
    <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
      <img src={post.src} alt={post.title} />
      <span className={styles.views}>{post.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
