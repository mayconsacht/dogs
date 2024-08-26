import { useFetch } from '../../hooks/useFetch';
import styles from './PostDelete.module.css';
import { POST_DELETE } from '../../api';

type Props = {
  id: string;
};

const PostDelete = ({ id }: Props) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      const { url, options } = POST_DELETE(id);
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Delete
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Delete
        </button>
      )}
    </>
  );
};

export default PostDelete;
