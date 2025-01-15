import React from 'react';
import useForm from '@/hooks/useForm';

interface UserFormProps {
  isEditing: boolean;
  initialValues: { name: string; email: string };
  validationErrors: Record<string, string[]>; // Error handling coming from the parent
  onSubmit: (values: { name: string; email: string }) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ isEditing, initialValues, validationErrors, onSubmit, onCancel }) => {
  const { values, errors, handleChange, handleSubmit, isSubmitting, reset } = useForm({
    initialValues,
    validate: (values) => {
      const errors: Record<string, string[]> = {};
      if (!values.name) errors.name = ['El nombre es obligatorio'];
      if (!values.email) errors.email = ['El correo electrónico es obligatorio'];
      return errors;
    },
  });

  const handleFormSubmit = () => {
    handleSubmit(() => {
      onSubmit(values);
      reset();
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.join(', ')}</p>}
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.join(', ')}</p>}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleFormSubmit}
          disabled={isSubmitting} // Deshabilitar el botón durante el envío
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:bg-gray-400"
        >
          {isEditing ? 'Actualizar' : 'Crear'}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default UserForm;
