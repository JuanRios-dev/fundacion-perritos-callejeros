import React, { useState, useEffect } from 'react';
import { toast } from 'sonner'; // Importación de Toaster y toast
import useCrud from '@/hooks/useCrud';
import Table from '@/components/global/Table';
import Pagination from '@/components/global/Pagination';
import RootLayout from '@/layouts/DashboardLayout';
import useModal from '@/hooks/useModal';
import UserForm from './UserForm';
import useConfirmation from '@/hooks/useConfirmation';

const UserList: React.FC = () => {
  const {
    data,
    pagination,
    loading,
    error,
    validationErrors,
    fetchAll,
    create,
    update,
    remove
  } = useCrud('/users');
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isConfirmationOpen,
    options: confirmationOptions,
    confirm,
    handleConfirm,
    handleCancel,
    Modal: ConfirmationModal,
  } = useConfirmation();

  const [editingUser, setEditingUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchAll(1, { search: searchQuery });
  }, [searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error); // Mostrar error global si existe
    }
  }, [error]);

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Nombre', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
  ];

  const actions = [
    {
      icon: 'Edit',
      onClick: (row) => {
        setEditingUser(row);
        openModal(); // Abrir modal en modo edición
      },
    },
    {
      icon: 'Delete',
      onClick: (row) => {
        confirm(
          `¿Estás seguro de que deseas eliminar al usuario ${row.name}?`,
          async () => {
            const success = await remove(row.id);
            if (success) {
              toast.success('Usuario eliminado correctamente');
            } else {
              toast.error('No se pudo eliminar el usuario');
            }
          }
        );
      },
    },
  ];

  const handlePageChange = (page: number) => {
    fetchAll(page, { search: searchQuery });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = async (values: { name: string; email: string }) => {
    let success = false;

    if (editingUser) {
      success = await update(editingUser.id, values);
      if (success) {
        toast.success('Usuario actualizado correctamente');
      } else {
        toast.error('No se pudo actualizar el usuario');
      }
    } else {
      success = await create(values);
      if (success) {
        toast.success('Usuario creado correctamente');
      } else {
        toast.error('No se pudo crear el usuario');
      }
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
          <h1 className="text-2xl font-semibold">Listado de Usuarios</h1>
          {loading && (
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin"></div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={searchQuery}
            onInput={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => {
              setEditingUser(null);
              openModal(); // Abrir modal para agregar nuevo usuario
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Agregar Usuario
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

      {/* Usamos el componente Modal que ahora es parte del hook useModal */}
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
              {editingUser ? 'Editar Usuario' : 'Agregar Usuario'}
            </h2>
            <UserForm
              isEditing={!!editingUser}
              initialValues={editingUser || { name: '', email: '' }}
              validationErrors={validationErrors}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          </div>
        </div>
      )}

      {/* Modal de confirmación */}
      {confirmationOptions && <ConfirmationModal />}
    </RootLayout>
  );
};

export default UserList;
