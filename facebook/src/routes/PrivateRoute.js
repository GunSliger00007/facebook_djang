// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../routes/AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...props}
      element={authenticated ? element : <Navigate to="/Facebook" replace />}
    />
  );
};

export default PrivateRoute;
