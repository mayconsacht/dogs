import { Input } from '../../components/Input/Input';
import useForm from '../../hooks/useForm';
import { Button } from '../../components/Button';
import Error from '../../components/Helper/Error';
import styles from './LoginForm.module.css';
import { USER_POST } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { useUser } from '../../context/user/hooks';

export const LoginCreate = () => {
  const username = useForm();
  const password = useForm('password');
  const email = useForm('email');

  const { userLogin } = useUser();
  const { request, loading, error } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response?.ok === true) {
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
