import { Component } from "react";
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
import { createPortal } from 'react-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ModalContainer, Overlay } from "./Modal.styled";

class Modal extends Component {
  state = {
    modalWindow: null,
  };

  componentDidMount() {
    const modalWindow = document.querySelector('#root-modal');
    document.addEventListener('keydown', this.handleKeyDown);
    if (modalWindow) {
      this.setState({ modalWindow });
      disablePageScroll();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    enablePageScroll();
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalWindow } = this.state;
    const { largeImageURL, tags } = this.props;

    if (!modalWindow) {
      return null;
    }

    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContainer>
          <img src={largeImageURL} alt={tags} />
        </ModalContainer>
      </Overlay>,
      modalWindow
    );
  }
}

export default Modal;