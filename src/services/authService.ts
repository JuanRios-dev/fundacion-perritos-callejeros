import api from '../api/apiClient';
import { ENDPOINTS } from '@/api/endpoints';

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, { email, password });

    const { token } = response.data;

    if (!token) {
      throw new Error('El token no fue recibido correctamente');
    }

    // Usar localStorage.setItem para guardar el token
    localStorage.setItem('token', token);

    console.log('Inicio de sesión exitoso');
  } catch (error: any) {
    console.error('Error en el inicio de sesión:', error.response?.data || error.message);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  await api.post(ENDPOINTS.AUTH.LOGOUT);
  // Usar localStorage.removeItem para eliminar el token
  localStorage.removeItem('token');
  console.log('Sesión cerrada');
};

export const getToken = (): string | null => {
  // Usar localStorage.getItem para obtener el token
  return localStorage.getItem('token');
};
