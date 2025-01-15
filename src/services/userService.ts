import apiClient from '@/api/apiClient';
import { ENDPOINTS } from '@/api/endpoints';

const userService = {
  list: (page: number = 1, limit: number = 10) => {
    return apiClient.get(`${ENDPOINTS.USERS.LIST}?page=${page}&limit=${limit}`);
  },
  get: (id: number) => {
    return apiClient.get(`${ENDPOINTS.USERS.DETAILS}/${id}`);
  },
  create: (data: any) => {
    return apiClient.post(ENDPOINTS.USERS.CREATE, data);
  },
  update: (id: number, data: any) => {
    return apiClient.put(`${ENDPOINTS.USERS.UPDATE}/${id}`, data);
  },
  delete: (id: number) => {
    return apiClient.delete(`${ENDPOINTS.USERS.DELETE}/${id}`);
  },
};

export default userService;
