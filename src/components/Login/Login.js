import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginForm from './LoginForm';
import LoginReset from './LoginReset';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to='/profile' />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='signup' element={<LoginCreate />} />
          <Route path='forgot' element={<LoginForgot />} />
          <Route path='reset' element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
