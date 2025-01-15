import { useState } from 'react';

// Definir los tipos para las validaciones y los valores del formulario
type ValidationErrors = Record<string, string[]>;
type FormValues = Record<string, any>;

interface UseFormProps {
  initialValues: FormValues;
  validate?: (values: FormValues) => ValidationErrors;
}

const useForm = ({ initialValues, validate }: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (callback: () => void) => {
    setIsSubmitting(true);

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        callback(); // Llamar al callback si no hay errores
      } else {
        setIsSubmitting(false); // Detener la acción de envío si hay errores
      }
    } else {
      callback(); // Llamar al callback sin validación si no se proporciona
    }
  };

  // Función para resetear los valores del formulario
  const reset = () => setValues(initialValues);

  return {
    values,
    setValues,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  };
};

export default useForm;
