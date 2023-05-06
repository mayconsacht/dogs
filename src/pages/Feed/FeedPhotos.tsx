import React, { Dispatch, Key, SetStateAction, useEffect } from 'react';
import { PHOTOS_GET } from '../../api';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';
import { useFetch } from '../../hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import { Photo } from './types';
import styles from './FeedPhotos.module.css';

type Props = {
  setModalPhoto: Dispatch<SetStateAction<Photo | null>>;
};

export const FeedPhotos = ({ setModalPhoto }: Props) => {
  const { data, loading, error, request } = useFetch<Photo[]>();

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
          <FeedPhotosItem
            key={item.id as Key}
            post={item}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
