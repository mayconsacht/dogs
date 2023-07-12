import React from 'react';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import useForm from '../../hooks/useForm';
import { RESET_PASSWORD } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import Error from '../../components/Helper/Error';
import { useNavigate } from 'react-router-dom';

export const LoginReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) navigate('/login');
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Password reset</h1>
        <Input
          label='New password'
          type='password'
          name='password'
          {...password}
        />
        {loading ? <Button>Resetting...</Button> : <Button>Reset</Button>}
      </form>
      <Error error={error} />
    </section>
  );
};
