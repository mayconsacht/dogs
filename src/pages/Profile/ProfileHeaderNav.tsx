import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as Stats } from '../../assets/stats.svg';
import { ReactComponent as Post } from '../../assets/post.svg';
import { ReactComponent as Exit } from '../../assets/exit.svg';
import styles from './ProfileHeaderNav.module.css';
import { useUser } from '../../context/user/hooks';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const ProfileHeaderNav = () => {
  const mobile = useMediaQuery('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { userLogout } = useUser();

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to='/profile' end>
          <MyPhotos />
          {mobile && 'My photos'}
        </NavLink>
        <NavLink to='/profile/stats'>
          <Stats />
          {mobile && 'Stats'}
        </NavLink>
        <NavLink to='/profile/post'>
          <Post />
          {mobile && 'Create post'}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile && 'Exit'}
        </button>
      </nav>
    </>
  );
};
