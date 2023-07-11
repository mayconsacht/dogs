import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { ProfileHeader } from './ProfileHeader';
import { ProfilePhotoPost } from './ProfilePhotoPost';
import { ProfileStats } from './ProfileStats';
import { UserContext } from '../../context/user/UserContext';
import React from 'react';
import { Post } from '../Post/Post';

export const Profile = () => {
  const context = React.useContext(UserContext);
  return (
    <section className='container'>
      <ProfileHeader />
      <Routes>
        <Route path='/' element={<Feed userId={context!.data!.id} />} />
        <Route path='post' element={<ProfilePhotoPost />} />
        <Route path='stats' element={<ProfileStats />} />
      </Routes>
    </section>
  );
};
