import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import ProfileHeader from './ProfileHeader';

const Profile = () => {
  return (
    <section className='container'>
      <ProfileHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
      </Routes>
    </section>
  );
};

export default Profile;
