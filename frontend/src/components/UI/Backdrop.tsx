interface BackdroplPorps {
  closeModal: () => void;
}

const Backdrop = ({ closeModal }: BackdroplPorps) => (
  <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal} />
);

export default Backdrop;
