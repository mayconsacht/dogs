import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import styles from './Login.module.css';
import { useUser } from '../../context/user/hooks';
import { NotFound } from '../../components/NotFound/NotFound';
import { Head } from '../../components/Helper/Head';

export const Login = () => {
  const { login } = useUser();
  if (login === true) return <Navigate to='/profile' />;
  return (
    <section className={styles.login}>
      <Head title='Login' />
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='signup' element={<LoginCreate />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
