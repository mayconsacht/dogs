import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Photo, Comment } from '../Feed/types';
import PostComments from './PostComments';
import styles from './PostContent.module.css';

type Props = {
  photo: Photo;
  comments: Comment[];
};

export const PostContent = ({ photo, comments }: Props) => {
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
      <PostComments id={photo.id} comments={photo.comments} />
    </div>
  );
};

export default PostContent;
