import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import useCrud from '@/hooks/useCrud';
import Table from '@/components/global/Table';
import Pagination from '@/components/global/Pagination';
import RootLayout from '@/layouts/DashboardLayout';
import useModal from '@/hooks/useModal';
import AdopterForm from './AdopterForm';
import useConfirmation from '@/hooks/useConfirmation';

const AnimalList: React.FC = () => {
  const {
    data,
    pagination,
    loading,
    error,
    success,
    validationErrors,
    fetchAll,
    create,
    update,
    remove,
  } = useCrud('/adopters', 'Adoptantes');

  const { isOpen, openModal, closeModal } = useModal();
  const {
    confirm,
    Modal: ConfirmationModal,
  } = useConfirmation();

  const [editingUser, setEditingUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchAll(1, { search: searchQuery });
  }, [searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Nombre', dataIndex: 'name' },
    { title: 'Correo', dataIndex: 'email' },
    { title: 'Teléfono', dataIndex: 'phone' },
    { title: 'Dirección', dataIndex: 'address' },
    { title: 'Estado', dataIndex: 'status' },
  ];

  const actions = [
    {
      icon: 'Edit',
      onClick: (row) => {
        setEditingUser(row);
        openModal();
      },
    },
    {
      icon: 'Delete',
      onClick: (row) => {
        confirm(
          `¿Estás seguro de que deseas eliminar al Adoptante ${row.name}?`,
          async () => {
            await remove(row.id);
          }
        );
      },
    },
  ];

  const handlePageChange = (page: number) => {
    fetchAll(page, { search: searchQuery });
  };

  const handleFormSubmit = async (values: { name: string; email: string; phone: string; address: string; status: string }) => {
    let success = false;

    if (editingUser) {
      success = await update(editingUser.id, values);
    } else {
      success = await create(values);
    }

    if (success) {
      closeModal();
      setEditingUser(null);
    }
  };

  const handleFormCancel = () => {
    closeModal();
    setEditingUser(null);
  };

  return (
    <RootLayout>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Listado de Adoptantes</h1>
          {loading && (
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin"></div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar Adoptante..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => {
              setEditingUser(null);
              openModal();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Agregar Adoptante
          </button>
        </div>
      </div>

      <Table columns={columns} data={data} actions={actions} />
      <Pagination
        currentPage={pagination.page}
        totalItems={pagination.total}
        itemsPerPage={pagination.limit}
        onPageChange={handlePageChange}
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Cerrar"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {editingUser ? 'Editar Adoptante' : 'Agregar Adoptante'}
            </h2>
            <AdopterForm
              isEditing={!!editingUser}
              initialValues={editingUser || { name: '', email: '', phone: '', address: '', status: 'pendiente' }}
              validationErrors={validationErrors}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          </div>
        </div>
      )}

      {<ConfirmationModal />}
    </RootLayout>
  );
};

export default AnimalList;
