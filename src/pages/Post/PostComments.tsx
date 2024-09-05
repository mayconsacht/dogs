import React from 'react';
import { useUser } from '../../context/user/hooks';
import { Comment } from '../Feed/types';
import PostCommentsForm from './PostCommentsForm';
import styles from './PostComments.module.css';

type Props = {
  id: string;
  single: boolean;
  comments: Comment[];
};

export const PostComments = ({ id, comments, single }: Props) => {
  const [internalComments, setComments] = React.useState(() =>
    comments ? comments : []
  );
  const commentsSection = React.useRef<HTMLUListElement | null>(null);
  const { login } = useUser();

  React.useEffect(() => {
    commentsSection.current!.scrollTop = commentsSection.current!.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {internalComments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}: </b>
            <span>{comment.content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PostCommentsForm id={id} setComments={setComments} single={single} />
      )}
    </>
  );
};

export default PostComments;
