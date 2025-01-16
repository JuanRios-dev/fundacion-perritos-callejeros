import axios from 'axios';
import { ENDPOINTS } from './endpoints';

/**
 * Crea una instancia de Axios con configuración base.
 */
const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL.URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor para agregar el token de autenticación en las peticiones.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token usando getItem
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor para manejar respuestas y errores.
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Error del servidor:', error.response.data);
      if (error.response.status === 401) {
        console.warn('No autorizado, redirigiendo al login...');
        window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      console.error('Error inesperado:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
