import { useParams } from 'react-router-dom';
import { Feed } from '../Feed';
import { Head } from '../../components/Helper/Head';

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='container mainSection'>
      <Head title={user as string} />
      <h1 className='title'>{user}</h1>
      <Feed userId={user} />
    </section>
  );
};
