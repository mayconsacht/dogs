import React, { ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';
import { Photo } from '../Feed/types';
import { ReactComponent as Enviar } from '../../assets/send.svg';
import { useFetch } from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';

type Props = {
  id: Number;
};

const PostCommentsForm = ({ id }: Props) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setComment(event.target.value);
  };

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, comment);
    request(url, options);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <textarea
        id='comment'
        name='comment'
        placeholder='Comment'
        value={comment}
        onChange={handleCommentChange}
      />

      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PostCommentsForm;
