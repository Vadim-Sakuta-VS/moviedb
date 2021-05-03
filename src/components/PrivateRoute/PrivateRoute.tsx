import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAuthStatus } from '../../store/userAuth/selectors';

const PrivateRoute: FC<RouteProps> = ({ children, ...props }) => {
  const isAuth = useSelector(selectUserAuthStatus);
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
