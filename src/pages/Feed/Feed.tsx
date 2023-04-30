import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { Post } from './types';

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState<Post>({} as Post);

  return (
    <div>
      {modalPhoto && <FeedModal post={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
