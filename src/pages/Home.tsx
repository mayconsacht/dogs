import { Head } from '../components/Helper/Head';
import { Feed } from './Feed';

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Photos' description='Dogs home site with feed and photos.' />
      <Feed />
    </section>
  );
};
