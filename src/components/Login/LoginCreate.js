import React from 'react';
import Input from '../Forms/Input';
import useForm from '../../hooks/useForm';
import Button from '../Forms/Button';
import { UserContext } from '../../context/UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import { USER_POST } from '../../api';
import useFetch from '../../hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const password = useForm('password');
  const email = useForm('email');

  const { userLogin } = React.useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Sign up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Sign up</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
