import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { ProfileHeader } from './ProfileHeader';
import { ProfilePhotoPost } from './ProfilePhotoPost';
import { ProfileStats } from './ProfileStats';
import { UserContext } from '../../context/user/UserContext';
import React from 'react';
import { NotFound } from '../../components/NotFound/NotFound';
import { Head } from '../../components/Helper/Head';

export const Profile = () => {
  const context = React.useContext(UserContext);
  return (
    <section className='container'>
      <Head title='My account' />
      <ProfileHeader />
      <Routes>
        <Route
          path='/'
          element={
            context!.data != null ? (
              <Feed userId={context!.data!.id.toString()} emptyMessage={true} />
            ) : (
              <Feed userId='0' emptyMessage={true} />
            )
          }
        />
        <Route path='post' element={<ProfilePhotoPost />} />
        <Route path='stats' element={<ProfileStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};
