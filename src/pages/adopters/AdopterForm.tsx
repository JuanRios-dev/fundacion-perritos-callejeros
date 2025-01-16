import React, { useState } from 'react';

interface AdopterFormProps {
    isEditing: boolean;
    initialValues: {
        name: string;
        email: string;
        phone: string;
        address: string;
        status: string;
    };
    validationErrors: Record<string, string[]>; // Error handling coming from the parent
    onSubmit: (values: AdopterFormProps['initialValues']) => void;
    onCancel: () => void;
}

const AdopterForm: React.FC<AdopterFormProps> = ({
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
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                </label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
                {getErrorMessages('phone').length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                        {getErrorMessages('phone').join(', ')}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Dirección
                </label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
                {getErrorMessages('address').length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                        {getErrorMessages('address').join(', ')}
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
                    <option value="pendiente">Pendiente</option>
                    <option value="aprobado">Aprobado</option>
                    <option value="rechazado">Rechazado</option>
                </select>
                {getErrorMessages('status').length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                        {getErrorMessages('status').join(', ')}
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

export default AdopterForm;
