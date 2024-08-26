import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/user/hooks';

type Props = { children: ReactElement };

const ProtectedRoute = ({ children }: Props) => {
  const { login } = useUser();
  return login ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
