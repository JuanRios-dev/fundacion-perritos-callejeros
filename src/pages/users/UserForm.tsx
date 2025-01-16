import React, { useState } from 'react';

interface UserFormProps {
  isEditing: boolean;
  initialValues: {
    name: string;
    email: string;
  };
  validationErrors: Record<string, string[]>; // Error handling coming from the parent
  onSubmit: (values: UserFormProps['initialValues']) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  isEditing,
  initialValues,
  validationErrors,
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const clearValidationErrors = () => {
    Object.keys(validationErrors).forEach((key) => {
      validationErrors[key] = [];
    });
  };

  const handleFormSubmit = () => {
    onSubmit(values);
  };

  const handleFormCancel = () => {
    onCancel();
    setValues(initialValues);
    clearValidationErrors();
  };

  const getErrorMessages = (fieldName: string): string[] => {
    return validationErrors[fieldName] || [];
  };

  return (
    <div className="bg-white rounded-lg max-h-[80vh] overflow-y-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('name').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('name').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Correo"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('email').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('email').join(', ')}
          </p>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleFormSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          {isEditing ? 'Actualizar' : 'Crear'}
        </button>
        <button
          onClick={handleFormCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default UserForm;
