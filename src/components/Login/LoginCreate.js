import React from 'react'

const LoginCreate = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username"
        value={username} 
        onChange={({target}) => setUsername(target.value)} 
      />

      <input 
        type="text" 
        placeholder="Password"
        value={password} 
        onChange={({target}) => setPassword(target.value)} 
      />

      <input 
        type="text" 
        placeholder="Email"
        value={email} 
        onChange={({target}) => setEmail(target.value)} 
      />
      <button>Send</button>
    </form>
  )
}

export default LoginCreate