import { IoCloseCircleOutline } from "react-icons/io5";

import "./modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article
      className={`modal ${isOpen && "modal is-open"}`}
      onClick={closeModal}
    >
      <div className="modal-container" onClick={handleModalContainerClick}>
          <IoCloseCircleOutline className="modal-close" color="ffcc00" size={60} onClick={closeModal} />
        {children}
      </div>
    </article>
  );
};

export default Modal;
