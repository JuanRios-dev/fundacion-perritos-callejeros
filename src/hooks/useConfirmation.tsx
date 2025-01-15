import { useState } from 'react';
import useModal from './useModal';

interface ConfirmationOptions {
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const useConfirmation = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [options, setOptions] = useState<ConfirmationOptions | null>(null);

  const confirm = (message: string, onConfirm: () => void, onCancel?: () => void) => {
    setOptions({ message, onConfirm, onCancel });
    openModal();
  };

  const handleConfirm = () => {
    if (options?.onConfirm) options.onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    if (options?.onCancel) options.onCancel();
    closeModal();
  };

  const Modal = () => {
    if (!isOpen || !options) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold text-center mb-4">Confirmación</h3>
          <p className="text-center mb-4">{options.message}</p>
          <div className="flex justify-around">
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Confirmar
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return {
    isOpen,
    options,
    confirm,
    handleConfirm,
    handleCancel,
    Modal, // Ahora el modal está incluido dentro del hook
  };
};

export default useConfirmation;
