import Modal from 'react-modal';
import Image from '../../assets/images/bonbon-image1.png';
import { Icons } from '../Icons';
import { Link } from 'react-router-dom';
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
      <div className="cart">
        <div className="cart-top">
          <h1 className="cart__title">В КОРЗИНЕ:</h1>
          <button className="button__close" onClick={() => onClose()}>
            <Icons className="icon__close" name="cross" size="27" color="black" />
          </button>
        </div>
        <div className="cart-container cart-empty">
          <h2 className="cart__title">Пока ничего нет...</h2>
          <Link className="cart__link" Link to="/catalogue">
            Перейти в каталог
          </Link>
          <Icons name="shopping-cart" size="300" color="#fae8f1" />
        </div>
        <div className="cart-container cart-full">
          <div className="cart-list__product_card">
            <img className="cart-list__product_image" src={Image} alt="" />
            <div className="cart-list__product_info">
              <h2 className="cart-list__product_title">Название букета</h2>
              <div className="cart-list__product_bottom">
                <div className="cart-list__bottom-info">
                  <p className="cart-list__product_amount">Количество: 1 шт.</p>
                  <p className="cart-list__product_price">1 000₽</p>
                </div>

                <button className="cart-list__product_like">
                  <Icons
                    className="cart-list__product_like-icon"
                    name="heart"
                    size="55"
                    color="#FAE8F1"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="cart-list__product_card">
            <img className="cart-list__product_image" src={Image} alt="" />
            <div className="cart-list__product_info">
              <h2 className="cart-list__product_title">Название букета</h2>
              <div className="cart-list__product_bottom">
                <div className="cart-list__bottom-info">
                  <p className="cart-list__product_amount">Количество: 1 шт.</p>
                  <p className="cart-list__product_price">1 000₽</p>
                </div>

                <button className="cart-list__product_like">
                  <Icons
                    className="cart-list__product_like-icon"
                    name="heart"
                    size="55"
                    color="#FAE8F1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-list_order">
          <button className="cart-list_order_button">ЗАКАЗАТЬ</button>
        </div>
      </div>
    </Modal>
  );
};

export { Cart };
