import Modal from 'react-modal';
import { Icons } from '../Icons';
import './cart.scss';

const Cart = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'cart-overlay'}
      className={'cart-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <div className="cart-container">
        <h1>Ваша корзина пуста</h1>
        <a href="#">К покупкам</a>
        <Icons name="shopping-cart" size="250" color="#F2F2F2" />
        <button className="button__close" onClick={() => onClose()}>
          <Icons name="cross" size="28" color="gray" />
        </button>
      </div>
    </Modal>
  );
};

export { Cart };
