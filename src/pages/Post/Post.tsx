import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';
import PostContent from './PostContent';
import { Comment, Photo } from '../Feed/types';
import { Head } from '../../components/Helper/Head';

type SinglePhoto = {
  photo: Photo;
  comments: Comment[];
};

export const Post = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch<SinglePhoto>();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id as string);
    request(url, options);
  }, [request, id]);

  if (error) <Error error={error} />;
  if (loading) <Loading />;
  if (data)
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title} />
        <PostContent
          photo={data.photo}
          single={true}
          comments={data.comments}
        />
      </section>
    );
  else return null;
};
