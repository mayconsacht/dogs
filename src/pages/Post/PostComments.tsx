import { useUser } from '../../context/user/hooks';
import { Comment, Photo } from '../Feed/types';
import PostCommentsForm from './PostCommentsForm';

type Props = {
  id: Number;
  comments: Comment[];
};

export const PostComments = ({ id, comments }: Props) => {
  const { login } = useUser();
  return <div>{login && <PostCommentsForm id={id} />}</div>;
};

export default PostComments;
