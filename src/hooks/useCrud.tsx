import { useState } from 'react';
import apiClient from '@/api/apiClient';

interface Pagination {
  page: number;
  limit: number;
  total: number;
}

const useCrud = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});

  // Helper function to reset errors
  const resetErrors = () => {
    setError(null);
    setValidationErrors({});
  };

  /**
   * Fetch all items from the API with optional filters.
   * @param {number} page - The page number to fetch.
   * @param {Record<string, any>} filters - Additional query parameters for filtering.
   */
  const fetchAll = async (page: number = 1, filters: Record<string, any> = {}) => {
    setLoading(false);
    resetErrors();

    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...filters,
      }).toString();

      const response = await apiClient.get(`${endpoint}?${queryParams}`);

      setData(response.data.data || []);
      setPagination({
        page: response.data.current_page || 1,
        limit: response.data.per_page || 10,
        total: response.data.total || 0,
      });
      return true;
    } catch (err: any) {
      setError('Server error 500');
      setData([]);
      return false;
    } finally {
      setLoading(true);
    }
  };

  /**
   * Create a new item in the API.
   * @param {any} newData - The data to create.
   * @returns {boolean} - Whether the creation was successful.
   */
  const create = async (newData: any): Promise<boolean> => {
    resetErrors();

    try {
      await apiClient.post(endpoint, newData);
      await fetchAll(pagination.page); // Refresh the data
      return true;
    } catch (err: any) {
      if (err.response?.status === 422) {
        setValidationErrors(err.response.data.errors || {});
      } else {
        console.log(err);
      }
      return false;
    } finally {
      setLoading(true);
    }
  };

  /**
   * Update an existing item in the API.
   * @param {number} id - The ID of the item to update.
   * @param {any} updatedData - The updated data.
   * @returns {boolean} - Whether the update was successful.
   */
  const update = async (id: number, updatedData: any): Promise<boolean> => {
    resetErrors();

    try {
      await apiClient.put(`${endpoint}/${id}`, updatedData);
      await fetchAll(pagination.page); // Refresh the data
      return true;
    } catch (err: any) {
      if (err.response?.status === 422) {
        setValidationErrors(err.response.data.errors || {});
      } else {
        setError(err.response?.data?.message || 'Error updating data');
      }
      return false;
    } finally {
      setLoading(true);
    }
  };

  /**
   * Delete an item from the API.
   * @param {number} id - The ID of the item to delete.
   * @returns {boolean} - Whether the deletion was successful.
   */
  const remove = async (id: number): Promise<boolean> => {
    resetErrors();

    try {
      await apiClient.delete(`${endpoint}/${id}`);
      await fetchAll(pagination.page); // Refresh the data
      return true;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error deleting data');
      return false;
    } finally {
      setLoading(true);
    }
  };

  return {
    data,
    pagination,
    loading,
    error,
    validationErrors,
    fetchAll,
    create,
    update,
    remove,
  };
};

export default useCrud;
