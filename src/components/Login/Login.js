import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginForm from './LoginForm';
import LoginReset from './LoginReset';

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to='/profile' />;
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='forgot' element={<LoginForgot />} />
        <Route path='reset' element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
