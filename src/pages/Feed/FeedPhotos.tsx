import React, { Key, useEffect } from 'react';
import { PHOTOS_GET } from '../../api';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';
import { useFetch } from '../../hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import { Post } from './types';
import styles from './FeedPhotos.module.css';

export const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch<Post[]>();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={styles.feed}>
        {data.map((item) => (
          <FeedPhotosItem key={item.id as Key} post={item} />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
