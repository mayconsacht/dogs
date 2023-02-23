import React from 'react';
import { PHOTOS_GET } from '../../api';
import { Post } from './types';
import styles from './FeedPhotosItem.module.css';

interface FeedPhotosItemInput {
  post: Post;
}

function FeedPhotosItem({ post }: FeedPhotosItemInput) {
  return (
    <li className={`${styles.photo} animeLeft`}>
      <img src={post.src} alt={post.title}></img>
      <span className={styles.views}>{post.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
