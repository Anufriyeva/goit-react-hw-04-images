import { useEffect } from "react";
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
import { createPortal } from 'react-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ModalContainer, Overlay } from "./Modal.styled";

const Modal = ({ largeImageURL, tags, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

  document.addEventListener("keydown", handleKeyDown);
    disablePageScroll();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      enablePageScroll();
    };
  }, [closeModal]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <img src={largeImageURL} alt={tags} />
      </ModalContainer>
    </Overlay>,
    document.getElementById("root-modal")
  );
};

export default Modal;