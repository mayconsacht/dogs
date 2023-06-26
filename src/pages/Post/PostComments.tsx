import React from 'react';
import { useUser } from '../../context/user/hooks';
import { Comment } from '../Feed/types';
import PostCommentsForm from './PostCommentsForm';
import styles from './PostComments.module.css';

type Props = {
  id: Number;
  comments: Comment[];
};

export const PostComments = ({ id, comments }: Props) => {
  const [internalComments, setComments] = React.useState(() =>
    comments ? comments : []
  );
  const commentsSection = React.useRef<HTMLUListElement | null>(null);
  const { login } = useUser();

  React.useEffect(() => {
    console.log(commentsSection.current!.scrollHeight);
    commentsSection.current!.scrollTop = commentsSection.current!.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {internalComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PostCommentsForm id={id} setComments={setComments} />}
    </>
  );
};

export default PostComments;
