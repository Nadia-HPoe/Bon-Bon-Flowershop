import Modal from 'react-modal';
import Image from '../../assets/images/bonbon-image1.jpg';
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
      <div>
        <div className="cart-container cart-empty">
          <h1 className="cart__title">Ваша корзина пуста</h1>
          <Link className="cart__link" Link to="/catalogue">
            Перейти в каталог
          </Link>
          <Icons name="shopping-cart" size="300" color="#F2F2F2" />
        </div>
        <div className="cart-container cart-full">
          <h1 className="cart__title">Ваша корзина</h1>

          <div className="cart-list__product">
            <div className="cart-list__product_card">
              <img className="cart-list__product_image" src={Image} alt="" />
              <div className="cart-list__product_info">
                <h2>Название букета</h2>
                <p>Размер S (маленький)</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet urna at
                  purus ullamcorper, non iaculis diam sagittis. Nulla mi orci, feugiat eu vulputate
                  id, dignissim sed ex. Integer cursus luctus odio ut condimentum. Integer
                  ullamcorper sed ipsum id commodo.
                </p>
                <div className="cart-list__product_bottom">
                  <div className="cart-list__buttons">
                    <button className="cart-list__button_less">-</button>
                    <input className="cart-list__amount_input" type="text" value="1" />
                    <button className="cart-list__button_more">+</button>
                  </div>
                  <p className="cart-list__product_price">1 000₽</p>
                  <button className="cart-list__product_delete">
                    <Icons
                      className="cart-list__product_delete-icon"
                      name="trash"
                      size="20"
                      color="gray"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="cart-list_order">
              <button className="cart-list_order_button">Оформить заказ на 1 000 ₽</button>
            </div>
          </div>
        </div>
        <button className="button__close" onClick={() => onClose()}>
          <Icons className="icon__close" name="cross" size="28" color="gray" />
        </button>
      </div>
    </Modal>
  );
};

export { Cart };
