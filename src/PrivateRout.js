import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Store/AuthContext';

const PrivateRoute = ({ path, element }) => {
  const auth = useAuth();

  return auth.isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
