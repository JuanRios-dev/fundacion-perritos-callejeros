import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Auth/Login.jsx';
import Landing from '@/pages/Landing';
import Home from '@/pages/Home';
import Users from '@/pages/users/UserList';
import Animals from '@/pages/animals/AnimalList';
import Adopter from '@/pages/adopters/AdopterList';
import PrivateRoute from '../middleware/PrivateRoute';
import { getToken } from '@/services/authService';

const AppRoutes = () => {
  const isAuthenticated = !!getToken(); // Verificar si el usuario está autenticado

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de Login */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/users" element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        } />
        <Route path="/animals" element={
          <PrivateRoute>
            <Animals />
          </PrivateRoute>
        } />
        <Route path="/adopters" element={
          <PrivateRoute>
            <Adopter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
