import React from 'react';
import { RouteProps, Route, RouteComponentProps } from 'react-router-dom';
import Footer from '../components/Footer';

interface IProps extends RouteProps {
  isAdmin?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isAdmin = false,
  ...rest
}) => {
  return (
    <Route
      {...rest}
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
