import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Store/AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const authCtx = useAuth();

  return authCtx.isLoggedIn ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
