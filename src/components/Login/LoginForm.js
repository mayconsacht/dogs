import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading, login } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}

        <Error error={error} />

        <Link className={styles.forgot} to='/login/forgot'>
          Forgot password?
        </Link>

        <div className={styles.register}>
          <h2 className={styles.subtitle}>Register</h2>
          <p>You don't have an account yet? Register here!</p>
          <Link className={stylesButton.button} to='/login/register'>
            Register
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
