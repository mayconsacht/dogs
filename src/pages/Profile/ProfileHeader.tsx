import { ProfileHeaderNav } from './ProfileHeaderNav';
import styles from './ProfileHeader.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ProfileHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/profile/post':
        setTitle('Post Your Picture');
        break;
      case '/profile/stats':
        setTitle('Stats');
        break;
      default:
        setTitle('My Profile');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <ProfileHeaderNav />
    </header>
  );
};
