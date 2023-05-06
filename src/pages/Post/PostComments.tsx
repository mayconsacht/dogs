import React from 'react';
import { Comment, Photo } from '../Feed/types';

type Props = {
  id: Number;
  comments: Comment[];
};

export const PostComments = ({ id, comments }: Props) => {
  return <div>PostComments</div>;
};

export default PostComments;
