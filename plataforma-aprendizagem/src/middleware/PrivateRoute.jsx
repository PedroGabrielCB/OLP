import { Route, Routes, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element }) => {
  // Verifica se há um item no sessionStorage
  const isAuthenticated = sessionStorage.getItem('user') !== null;

  // Redireciona para a página de login se não estiver autenticado
  return isAuthenticated ? element : <Navigate to="/login" />;
};
