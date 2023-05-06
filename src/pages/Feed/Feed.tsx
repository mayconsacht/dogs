import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { Photo } from './types';

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState<Photo | null>({} as Photo);

  return (
    <div>
      {modalPhoto && (
        <FeedModal post={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
