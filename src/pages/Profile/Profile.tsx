import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { ProfileHeader } from './ProfileHeader';
import { ProfilePhotoPost } from './ProfilePhotoPost';
import { ProfileStats } from './ProfileStats';

export const Profile = () => {
  return (
    <section className='container'>
      <ProfileHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='post' element={<ProfilePhotoPost />} />
        <Route path='stats' element={<ProfileStats />} />
      </Routes>
    </section>
  );
};
