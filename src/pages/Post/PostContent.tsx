import { Link } from 'react-router-dom';
import { Photo, Comment } from '../Feed/types';
import PostComments from './PostComments';
import styles from './PostContent.module.css';
import { useUser } from '../../context/user/hooks';
import PostDelete from './PostDelete';
import Image from '../../components/Helper/Image';

type Props = {
  photo: Photo;
  comments: Comment[];
  single: boolean;
};

export const PostContent = ({ photo, comments, single }: Props) => {
  const user = useUser();
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PostDelete id={photo.id} />
            ) : (
              <Link to={`/profile-feed/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizations}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/post/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PostComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PostContent;
