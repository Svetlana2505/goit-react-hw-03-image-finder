import { Component } from 'react';
import { Backdrop, Modal } from './Modal.styled.js';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeydown);
  }

  handleWindowKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <Backdrop onClick={this.closeBackdrop}>
        <Modal>
          <img src={image} alt="" />
        </Modal>
      </Backdrop>
    );
  }
}

export default ModalWindow;
