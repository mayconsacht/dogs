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
  setInfinite: Dispatch<SetStateAction<boolean>>;
  userId: string;
  page: Number;
  emptyMessage?: boolean;
};

export const FeedPhotos = ({
  setInfinite,
  setModalPhoto,
  userId,
  page,
  emptyMessage = false,
}: Props) => {
  const { data, loading, error, request } = useFetch<Photo[]>();
  const total = 6;

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: page,
        total,
        user: userId,
      });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, userId, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data && data.length > 0) {
    return (
      <ul className={styles.feed}>
        {data.map((item, index) => (
          <FeedPhotosItem
            key={index as Key}
            post={item}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else if (emptyMessage) {
    return (
      <div className={styles.boxMessage}>
        <p>
          When you post your lovely pictures, you'll be able to see them here!
          &#128155;
        </p>
      </div>
    );
  }
  return null;
};

export default FeedPhotos;
