import styles from '.FeedModal.module.css';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Post } from './types';
import { PHOTO_GET } from '../../api';

function FeedModal({ id }: Post) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  return <div className={styles.module}>FeedModal</div>;
}

export default FeedModal;
