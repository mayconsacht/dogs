import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(() => {
    setData(null);
    setLogin(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  React.useEffect(() => {
    async function autoLogin() {
      setLoading(true);
      try {
        const token = window.localStorage.getItem('token');
        if (token) {
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = fetch(url, options);
          if (!response.ok) throw new Error('Invalid token');
          getUser(token);
        }
      } catch (err) {
        setError(err.message);
        userLogout();
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      const { url, options } = TOKEN_POST({
        username,
        password,
      });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusMessage}`);
      const json = await response.json();

      await getUser(json.token);
      navigate('profile');

      window.localStorage.setItem('token', json.token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
