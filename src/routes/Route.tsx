import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';

interface IProps {
  isAdmin?: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children, isAdmin = false }) => {
  const { isLoading, isSigned } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) return <Loader size={48} style={{ height: '100vh' }} />;

  if (!isSigned && isAdmin) return <Navigate to="/entrar" replace />;

  if (isSigned && pathname === '/entrar')
    return <Navigate to="/mensagens/matriculas" replace />;

  return (
    <>
      {children}
      {isAdmin || <Footer />}
    </>
  );
};

export default ProtectedRoute;
