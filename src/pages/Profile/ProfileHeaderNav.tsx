import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as Stats } from '../../assets/stats.svg';
import { ReactComponent as Post } from '../../assets/post.svg';
import { ReactComponent as Exit } from '../../assets/exit.svg';
import styles from './ProfileHeaderNav.module.css';
import { useUser } from '../../context/user/hooks';

export const ProfileHeaderNav = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { userLogout } = useUser();

  return (
    <nav className={styles.nav}>
      <NavLink to='/profile'>
        <MyPhotos />
        {mobile && 'My photos'}
      </NavLink>
      <NavLink to='/profile/stats'>
        <Stats />
        {mobile && 'Stats'}
      </NavLink>
      <NavLink to='profile/post'>
        <Post />
        {mobile && 'Create post'}
      </NavLink>
      <Button onClick={userLogout}>
        <Exit />
        {mobile && 'Exit'}
      </Button>
    </nav>
  );
};
