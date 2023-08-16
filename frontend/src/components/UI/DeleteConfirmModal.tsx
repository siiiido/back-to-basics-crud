import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';

interface DeleteConfirmModalPorps {
  closeModal: () => void;
}

const DeleteConfirmModal = ({ closeModal }: DeleteConfirmModalPorps) => {
  return (
    <>
      {createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Backdrop closeModal={closeModal} />
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg uppercase"
                onClick={closeModal}
              >
                No
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg uppercase">
                Yes
              </button>
            </div>
          </div>
        </div>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default DeleteConfirmModal;
