import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../../api';
import { createContext, useEffect, useState, useCallback } from 'react';
import { Context, ContextProp, User } from './types';

export const UserContext = createContext<Context | null>(null);

export const UserStorage = ({ children }: ContextProp) => {
  const [data, setData] = useState<User | null>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const userLogout = useCallback(() => {
    setData(null);
    setLogin(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      setLoading(true);
      const token = window.localStorage.getItem('token');
      try {
        if (token) {
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (response.ok === false) throw new Error('Invalid token');
          getUser(token);
        } else {
          setLogin(false);
        }
      } catch (err: any) {
        setError(err.message);
        userLogout();
      } finally {
        setLoading(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      const { url, options } = TOKEN_POST({
        username,
        password,
      });
      setLoading(true);
      const response = await fetch(url, options);
      if (response.ok === false)
        throw new Error(`Error: ${response.statusText}`);
      const json = await response.json();

      await getUser(json.token);
      window.localStorage.setItem('token', json.token);

      navigate('profile');
    } catch (err: any) {
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
