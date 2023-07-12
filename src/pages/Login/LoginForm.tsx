import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Error from '../../components/Helper/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../../components/Button/Button.module.css';
import { useUser } from '../../context/user/hooks';
import { Head } from '../../components/Helper/Head';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading, login } = useUser();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Login' />
      <h1 className='title'>Sign in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Sign in</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.forgot} to='/login/forgot'>
        Forgot password?
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Sign up</h2>
        <p>New to Dogs? Create an account!</p>
        <Link className={stylesButton.button} to='/login/signup'>
          Sign up
        </Link>
      </div>
    </section>
  );
};
