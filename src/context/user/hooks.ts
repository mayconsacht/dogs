import { useContext } from 'react';
import { UserContext } from './UserContext';

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('useUser need be used within UserContext');
  }

  return context;
};
