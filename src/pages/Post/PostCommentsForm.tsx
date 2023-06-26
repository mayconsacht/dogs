import React, { ChangeEventHandler } from 'react';
import { ReactComponent as Enviar } from '../../assets/send.svg';
import { useFetch } from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import { Comment } from '../Feed/types';
import styles from './PostCommentsForm.module.css';
type Props = {
  id: Number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

const PostCommentsForm = ({ id, setComments }: Props) => {
  const [comment, setComment] = React.useState('');
  const { request } = useFetch();

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setComment(event.target.value);
  };

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response?.ok) {
      setComments((comments) => [...comments, json] as Comment[]);
      setComment('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comment'
        value={comment}
        onChange={handleCommentChange}
      />

      <button className={styles.button}>
        <Enviar />
      </button>
    </form>
  );
};

export default PostCommentsForm;
