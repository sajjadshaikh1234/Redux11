import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const auth = localStorage.getItem("user") ? localStorage.getItem("user") : null
    return auth ? <Outlet /> : <Navigate to="/" />;
}
  
export const ProtectedRoute = ({ isprotected }) => {
    const auth = localStorage.getItem("user") ? localStorage.getItem("user") : null
    return auth  ||  isprotected  ? <Outlet /> : <Navigate to="/" />;
}
  