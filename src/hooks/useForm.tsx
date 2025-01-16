import { useState } from 'react';

// Definir los tipos para los valores del formulario
type FormValues = Record<string, any>;

interface UseFormProps {
  initialValues: FormValues;
}

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (callback: () => void) => {
    callback();
  };

  // Función para resetear los valores del formulario
  const reset = () => setValues(initialValues);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    reset,
  };
};

export default useForm;