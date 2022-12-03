import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = ({ label }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username"/>
        <Input label="Password" type="password" name="password"/>
        <Button>Login</Button>

        <Link to="/login/create">Create</Link>
      </form>
    </section>
  )
}

export default LoginForm