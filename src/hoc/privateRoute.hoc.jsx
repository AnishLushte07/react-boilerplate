import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import session from '../services/session.service';

const PrivateRoute = ({
  component: Component,
  additionalProps,
  providerFunc,
  ...rest
}) => {
  if (!session.isLoggedIn) {
    window.location.href = window.location.origin + '/login';
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        session.isLoggedIn ? (
          providerFunc ? (
            providerFunc(Component, additionalProps)
          ) : (
              <Component {...props} {...additionalProps} />
            )
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
};

export default PrivateRoute;
