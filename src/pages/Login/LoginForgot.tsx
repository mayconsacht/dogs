import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import useForm from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { FORGOT_PASSWORD } from '../../api';
import Error from '../../components/Helper/Error';
import { Head } from '../../components/Helper/Head';

export const LoginForgot = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = FORGOT_PASSWORD({
        login: login.value,
        url: window.location.href.replace('forgot', 'reset'),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <Head title='Forgot your password?' />
      <h1 className='title'>Forgot your password?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / User' type='text' name='login' {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};
