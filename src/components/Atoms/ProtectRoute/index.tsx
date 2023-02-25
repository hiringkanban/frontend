import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuth } = useSelector((state: { auth: { isAuth: boolean } }) => state.auth);
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }
  return <> {children} </>;
};

export default ProtectedRoute;
