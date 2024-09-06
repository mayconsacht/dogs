import { Photo } from './types';
import styles from './FeedPhotosItem.module.css';
import { Dispatch, SetStateAction } from 'react';
import Image from '../../components/Helper/Image';

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
      <Image src={post.img} alt={post.title} />
      <span className={styles.views}>{post.totalHits}</span>
    </li>
  );
};

export default FeedPhotosItem;
