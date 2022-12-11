import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { useUser } from '../../context/user/hooks';

export const NavBar = () => {
  const { data } = useUser();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to='/profile'>
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Sign in / Sign up
          </Link>
        )}
      </nav>
    </header>
  );
};
