import React from 'react';
import { USER_STATS } from '../../api';
import { Head } from '../../components/Helper/Head';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/Helper/Loading';
import Error from '../../components/Helper/Error';
import ProfileStatsGraphs from './ProfileStatsGraphs';

export const ProfileStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = USER_STATS();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) <Loading />;
  if (error) <Error error={error} />;
  if (data) {
    return (
      <div>
        <Head title='Stats' />
        <ProfileStatsGraphs stats={data} />
      </div>
    );
  }
  return null;
};
