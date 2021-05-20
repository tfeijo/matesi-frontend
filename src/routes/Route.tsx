import React from 'react';
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';

interface IProps extends RouteProps {
  isAdmin?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  path,
  isAdmin = false,
  ...rest
}) => {
  const { isLoading, isSigned } = useAuth();

  if (isLoading) return <Loader size={48} style={{ height: '100vh' }} />;

  if (!isSigned && isAdmin) return <Redirect to="/entrar" />;

  if (isSigned && path === '/entrar')
    return <Redirect to="/mensagens/matriculas" />;

  return (
    <Route
      {...rest}
      path={path}
      render={props => (
        <>
          <Component {...props} />
          {isAdmin || <Footer />}
        </>
      )}
    />
  );
};

export default RouteWrapper;
