import styles from './FeedModal.module.css';
import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Photo, Post } from './types';
import { PHOTO_GET } from '../../api';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';
import PostContent from '../Post/PostContent';

type Props = {
  post: Photo;
  setModalPhoto: Dispatch<SetStateAction<Photo | null>>;
};

const FeedModal = ({ post, setModalPhoto }: Props) => {
  const { data, error, loading, request } = useFetch<Post>();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(post.id);
    if (post.id) request(url, options);
  }, [post.id, request]);

  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PostContent photo={data.photo} comments={data.comments} />}
    </div>
  );
};

export default FeedModal;
