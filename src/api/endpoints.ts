const URL = 'http://127.0.0.1:8000/api'

export const ENDPOINTS = {
    BASE_URL: {
        URL: 'http://127.0.0.1:8000/api',
    },
    AUTH: {
        LOGIN: `${URL}/auth/login`,
        REGISTER: `${URL}/auth/register`,
        LOGOUT: `${URL}/auth/logout`,
    },
    USERS: {
        LIST: `${URL}/users`,
        DETAILS: (id: string) => `${URL}/users/${id}`,
        CREATE: `${URL}/users`,
        UPDATE: (id: string) => `${URL}/users/${id}`,
        DELETE: (id: string) => `${URL}/users/${id}`,
    },
    ANIMALS: {
        LIST: `${URL}/animals`,
        DETAILS: (id: string) => `${URL}/animals/${id}`,
        CREATE: `${URL}/animals`,
        UPDATE: (id: string) => `${URL}/animals/${id}`,
        DELETE: (id: string) => `${URL}/animals/${id}`,
    },
};
