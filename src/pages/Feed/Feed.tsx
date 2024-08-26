import React, { Key } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { Photo } from './types';

type Props = {
  userId?: string;
};

export const Feed = ({ userId = '0' }: Props) => {
  const [modalPhoto, setModalPhoto] = React.useState<Photo | null>(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infinitScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('whell', infinitScroll);
    window.addEventListener('scroll', infinitScroll);

    return () => {
      window.removeEventListener('whell', infinitScroll);
      window.removeEventListener('scroll', infinitScroll);
    };
  });
  return (
    <div>
      {modalPhoto && (
        <FeedModal post={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page as Key}
          page={page}
          userId={userId}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
