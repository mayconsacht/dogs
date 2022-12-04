import React from 'react';
import { Link } from 'react-router-dom';
import userForm from '../../hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = ({ label }) => {
  const username = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Username' type='text' name='username' {...username} />
        <Input label='Password' type='password' name='password' />
        <Button>Login</Button>

        <Link to='/login/create'>Create</Link>
      </form>
    </section>
  );
};

export default LoginForm;
