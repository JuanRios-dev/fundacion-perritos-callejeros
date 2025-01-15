import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '@/services/authService';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = !!getToken();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
