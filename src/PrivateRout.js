import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './Store/AuthContext';

const PrivateRoute = ({ element }) => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
