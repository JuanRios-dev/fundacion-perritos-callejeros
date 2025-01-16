import React, { useState } from 'react';

interface AnimalFormProps {
  isEditing: boolean;
  initialValues: {
    name: string;
    species: string;
    breed?: string;
    age?: number;
    gender: string;
    size: string;
    description?: string;
    status: string;
    health_status?: string;
    arrival_date: string;
    adoption_date?: string;
    location?: string;
  };
  validationErrors: Record<string, string[]>;
  onSubmit: (values: AnimalFormProps['initialValues']) => void;
  onCancel: () => void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({
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
        <label htmlFor="species" className="block text-sm font-medium text-gray-700">
          Especie
        </label>
        <input
          id="species"
          type="text"
          name="species"
          value={values.species}
          onChange={handleChange}
          placeholder="Especie"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('species').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('species').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
          Raza
        </label>
        <input
          id="breed"
          type="text"
          name="breed"
          value={values.breed || ''}
          onChange={handleChange}
          placeholder="Raza"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('breed').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('breed').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Edad (en meses)
        </label>
        <input
          id="age"
          type="number"
          name="age"
          value={values.age || ''}
          onChange={handleChange}
          placeholder="Edad (en meses)"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('age').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('age').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Género
        </label>
        <select
          id="gender"
          name="gender"
          value={values.gender}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="">Seleccione género</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
        {getErrorMessages('gender').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('gender').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-sm font-medium text-gray-700">
          Tamaño
        </label>
        <select
          id="size"
          name="size"
          value={values.size}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="">Seleccione tamaño</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
        {getErrorMessages('size').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('size').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <select
          id="status"
          name="status"
          value={values.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="">Seleccione estado</option>
          <option value="disponible">Disponible</option>
          <option value="adoptado">Adoptado</option>
          <option value="en tratamiento">En tratamiento</option>
        </select>
        {getErrorMessages('status').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('status').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="health_status" className="block text-sm font-medium text-gray-700">
          Estado de salud
        </label>
        <input
          id="health_status"
          type="text"
          name="health_status"
          value={values.health_status || ''}
          onChange={handleChange}
          placeholder="Estado de salud"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('health_status').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('health_status').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="arrival_date" className="block text-sm font-medium text-gray-700">
          Fecha de ingreso
        </label>
        <input
          id="arrival_date"
          type="date"
          name="arrival_date"
          value={values.arrival_date}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {getErrorMessages('arrival_date').length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            {getErrorMessages('arrival_date').join(', ')}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="adoption_date" className="block text-sm font-medium text-gray-700">
          Fecha de adopción
        </label>
        <input
          id="adoption_date"
          type="date"
          name="adoption_date"
          value={values.adoption_date || ''}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Ubicación
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={values.location || ''}
          onChange={handleChange}
          placeholder="Ubicación"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleFormSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:bg-gray-400"
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

export default AnimalForm;
