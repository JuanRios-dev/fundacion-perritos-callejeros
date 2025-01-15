export const ENDPOINTS = {
    BASE_URL: {
        URL: 'http://127.0.0.1:8000',
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
    //   PRODUCTS: {
    //     LIST: `${BASE_URL}/products`,
    //     DETAILS: (id: string) => `${BASE_URL}/products/${id}`,
    //   },
};
